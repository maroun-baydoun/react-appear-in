import { StrictMode, type FormEvent, useCallback, useState } from "react";
import { createRoot } from "react-dom/client";
import AppearIn from "react-appear-in";

import "./style.css";
import "./components/chip-tabs";
import "./components/copyright-year";
import "./components/snippet-card";
import "./components/snippet-copy-button";

const Demo = () => {
  const [draftDelay, setDraftDelay] = useState(1500);
  const [appliedDelay, setAppliedDelay] = useState(1500);
  const [appeared, setAppeared] = useState(false);

  const handleAppear = useCallback(() => {
    setAppeared(true);
  }, []);

  const applyDelay = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAppliedDelay(draftDelay);
    setAppeared(false);
  };

  return (
    <div className="demo-grid">
      <form className="demo-form" onSubmit={applyDelay}>
        <h4>Delay</h4>
        <label className="demo-range-label">
          <span>Milliseconds</span>
          <output>{draftDelay.toLocaleString()}ms</output>
          <input
            className="demo-range"
            max="10000"
            min="0"
            onChange={(event) => setDraftDelay(Number(event.target.value))}
            step="100"
            type="range"
            value={draftDelay}
          />
        </label>
        <button className="demo-apply" type="submit">
          Apply delay
        </button>
        <p className="demo-form-note">
          {draftDelay === appliedDelay
            ? "Choose a delay, then apply it to the preview."
            : "Your new delay is ready to apply."}
        </p>
      </form>

      <div className="demo-result" aria-live="polite">
        <p className="demo-result-label">
          {draftDelay !== appliedDelay
            ? "Ready to apply"
            : appeared
              ? "Visible"
              : "Waiting"}
        </p>
        <div className="demo-rendered">
          <AppearIn
            key={appliedDelay}
            milliseconds={appliedDelay}
            onAppear={handleAppear}
            placeholder={(delay) => (
              <p className="demo-placeholder">Rendering in {delay}ms…</p>
            )}
          >
            <p className="demo-content">The component rendered.</p>
          </AppearIn>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById("demo-root")!).render(
  <StrictMode>
    <Demo />
  </StrictMode>,
);
