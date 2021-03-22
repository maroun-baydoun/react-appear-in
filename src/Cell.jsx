import React, { Fragment, useCallback, useState } from "react";
import AppearIn from "react-appear-in";

const Cell = () => {
  const [demoStarted, setDemoStarted] = useState(false);
  const [duration, setDuration] = useState("5");

  const placeholder = useCallback(
    (time) => (
      <div
        className="cell__placeholder"
        style={{ animationDuration: `${time}ms` }}
      />
    ),
    []
  );

  const chooseDuration = (e) => setDuration(e.target.value);

  return (
    <div className="cell-container">
      <div className={`cell ${demoStarted ? "cell--started" : ""}`}>
        {!demoStarted ? (
          <Fragment>
            <div className="cell__options-container">
              <p>Make the component appear after: </p>
              <div className="">
                <input
                  type="radio"
                  value="5"
                  name="duration"
                  id="duration-5"
                  checked={duration === "5"}
                  onChange={chooseDuration}
                />
                <label htmlFor="duration-5">5s.</label>

                <input
                  type="radio"
                  value="10"
                  name="duration"
                  id="duration-10"
                  checked={duration === "10"}
                  onChange={chooseDuration}
                />
                <label htmlFor="duration-10">10s.</label>

                <input
                  type="radio"
                  value="15"
                  name="duration"
                  id="duration-15"
                  checked={duration === "15"}
                  onChange={chooseDuration}
                />
                <label htmlFor="duration-15">15s.</label>
              </div>
              <button className="button" onClick={() => setDemoStarted(true)}>
                Start
              </button>
            </div>
          </Fragment>
        ) : null}

        {demoStarted ? (
          <AppearIn
            seconds={Number.parseInt(duration, 10)}
            placeholder={placeholder}
          >
            <div className="cell__content">
              <div>
                I am a wonderful React component, and I appeared after{" "}
                {duration}s.
              </div>
            </div>
          </AppearIn>
        ) : null}
      </div>
    </div>
  );
};

export default Cell;
