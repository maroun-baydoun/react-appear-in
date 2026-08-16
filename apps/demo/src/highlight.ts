type SnippetLanguage = "typescript" | "tsx" | "shell" | "html";

const tsKeywords = new Set([
  "import",
  "from",
  "const",
  "let",
  "var",
  "function",
  "return",
  "if",
  "else",
]);

const shellKeywords = new Set(["npm", "pnpm", "yarn", "install", "add"]);

const renderHtml = (source: string) =>
  source
    .split(/(<!--[\s\S]*?-->|<[^>]+>)/g)
    .map((part) => {
      if (!part.startsWith("<")) {
        return escapeHtml(part);
      }

      if (part.startsWith("<!--") && part.endsWith("-->")) {
        return wrap("comment", part);
      }

      return escapeHtml(part)
        .replace(/(&lt;\/?)([\w-]+)/, '$1<span class="token-keyword">$2</span>')
        .replace(
          /([\w-]+)(=)(\&quot;[^\&quot;]*\&quot;)/g,
          '<span class="token-identifier">$1</span><span class="token-operator">$2</span><span class="token-string">$3</span>',
        );
    })
    .join("");

const punctuation = new Set(["{", "}", "(", ")", "[", "]", ",", ";", "."]);

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const wrap = (kind: string, value: string) =>
  `<span class="token-${kind}">${escapeHtml(value)}</span>`;

const renderTypeScript = (source: string) => {
  const tokens: string[] = [];
  let index = 0;

  while (index < source.length) {
    const char = source[index];

    if (/\s/.test(char)) {
      let end = index + 1;
      while (end < source.length && /\s/.test(source[end])) {
        end += 1;
      }
      tokens.push(escapeHtml(source.slice(index, end)));
      index = end;
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      const quote = char;
      let end = index + 1;
      while (end < source.length) {
        if (source[end] === "\\" && end + 1 < source.length) {
          end += 2;
          continue;
        }

        if (source[end] === quote) {
          end += 1;
          break;
        }

        end += 1;
      }

      tokens.push(wrap("string", source.slice(index, end)));
      index = end;
      continue;
    }

    if (char === "/" && source[index + 1] === "/") {
      let end = index + 2;
      while (end < source.length && source[end] !== "\n") {
        end += 1;
      }

      tokens.push(wrap("comment", source.slice(index, end)));
      index = end;
      continue;
    }

    if (char === "/" && source[index + 1] === "*") {
      const closingIndex = source.indexOf("*/", index + 2);
      const end = closingIndex === -1 ? source.length : closingIndex + 2;
      tokens.push(wrap("comment", source.slice(index, end)));
      index = end;
      continue;
    }

    if (char === "=" && source[index + 1] === ">") {
      tokens.push(wrap("operator", "=>"));
      index += 2;
      continue;
    }

    if (char === "=") {
      tokens.push(wrap("operator", "="));
      index += 1;
      continue;
    }

    if (punctuation.has(char)) {
      tokens.push(wrap("punctuation", char));
      index += 1;
      continue;
    }

    if (/[A-Za-z_$]/.test(char)) {
      let end = index + 1;
      while (end < source.length && /[A-Za-z0-9_$]/.test(source[end])) {
        end += 1;
      }

      const word = source.slice(index, end);
      tokens.push(
        tsKeywords.has(word) ? wrap("keyword", word) : wrap("identifier", word),
      );
      index = end;
      continue;
    }

    tokens.push(escapeHtml(char));
    index += 1;
  }

  return tokens.join("");
};

const renderJsxTag = (source: string) => {
  const match = source.match(/^(<\/?)([A-Za-z][\w.-]*)([\s\S]*?)(\/?>)$/);

  if (!match) {
    return escapeHtml(source);
  }

  const [, opening, name, attributes, closing] = match;
  let rendered = `${escapeHtml(opening)}${wrap("keyword", name)}`;
  let index = 0;

  while (index < attributes.length) {
    const whitespace = attributes[index].match(/\s/);

    if (whitespace) {
      rendered += escapeHtml(whitespace[0]);
      index += 1;
      continue;
    }

    const attributeMatch = attributes.slice(index).match(/^[A-Za-z_:][\w:.-]*/);

    if (!attributeMatch) {
      rendered += escapeHtml(attributes[index]);
      index += 1;
      continue;
    }

    const attribute = attributeMatch[0];
    rendered += wrap("identifier", attribute);
    index += attribute.length;

    if (attributes[index] !== "=") {
      continue;
    }

    rendered += wrap("operator", "=");
    index += 1;

    if (attributes[index] === '"' || attributes[index] === "'") {
      const quote = attributes[index];
      let end = index + 1;

      while (end < attributes.length && attributes[end] !== quote) {
        end += 1;
      }

      if (end < attributes.length) {
        end += 1;
      }

      rendered += wrap("string", attributes.slice(index, end));
      index = end;
      continue;
    }

    if (attributes[index] === "{") {
      const end = attributes.indexOf("}", index + 1);
      const expressionEnd = end === -1 ? attributes.length - 1 : end;

      rendered += wrap("punctuation", "{");
      rendered += renderTypeScript(attributes.slice(index + 1, expressionEnd));
      rendered += wrap("punctuation", "}");
      index = expressionEnd + 1;
      continue;
    }

    const valueMatch = attributes.slice(index).match(/^[^\s]+/);

    if (valueMatch) {
      rendered += wrap("string", valueMatch[0]);
      index += valueMatch[0].length;
    }
  }

  return `${rendered}${escapeHtml(closing)}`;
};

const renderTsx = (source: string) =>
  source
    .split(/(<\/?[A-Za-z][^>]*>)/g)
    .map((part) =>
      part.startsWith("<") ? renderJsxTag(part) : renderTypeScript(part),
    )
    .join("");

const renderShell = (source: string) =>
  source
    .split("\n")
    .map((line) =>
      line
        .split(/(\s+)/)
        .map((part) => {
          if (!part) {
            return part;
          }

          if (/^\s+$/.test(part)) {
            return escapeHtml(part);
          }

          if (shellKeywords.has(part)) {
            return wrap("keyword", part);
          }

          if (part.startsWith("-")) {
            return wrap("operator", part);
          }

          if (/^[A-Za-z0-9@._/-]+$/.test(part)) {
            return wrap("identifier", part);
          }

          return escapeHtml(part);
        })
        .join(""),
    )
    .join("\n");

export function renderHighlightedCode(
  source: string,
  language: SnippetLanguage = "typescript",
) {
  if (language === "html") {
    return renderHtml(source);
  }

  if (language === "shell") {
    return renderShell(source);
  }

  if (language === "tsx") {
    return renderTsx(source);
  }

  return renderTypeScript(source);
}
