import type { Plugin } from "vite";

import { renderHighlightedCode } from "./highlight.ts";

type SnippetMap = Record<string, string>;
type SnippetLanguage = "typescript" | "tsx" | "shell" | "html";

export function demoCodePlugin(snippets: SnippetMap): Plugin {
  return {
    name: "demo-code-plugin",
    transformIndexHtml(html: string) {
      return html.replace(
        /<code([^>]*data-code="([^"]+)"[^>]*)><\/code>/g,
        (_match, attrs: string, key: string) => {
          const snippet = snippets[key];
          const languageMatch = attrs.match(/data-language="([^"]+)"/);
          const language =
            languageMatch?.[1] === "shell"
              ? "shell"
              : languageMatch?.[1] === "html"
                ? "html"
                : languageMatch?.[1] === "tsx"
                  ? "tsx"
                  : "typescript";

          if (!snippet) {
            return `<code${attrs}></code>`;
          }

          return `<code${attrs}>${renderHighlightedCode(
            snippet,
            language as SnippetLanguage,
          )}</code>`;
        },
      );
    },
  };
}
