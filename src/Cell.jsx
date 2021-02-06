import React, { useCallback, useState } from "react";
import AppearIn from "react-appear-in";

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * max) + min;

const generateRandomTime = () => ({
  milliseconds: generateRandomNumber(10, 100),
  minutes: generateRandomNumber(0, 1),
  seconds: generateRandomNumber(5, 30),
});

const Cell = () => {
  const [{ minutes, seconds, milliseconds }] = useState({
    ...generateRandomTime(),
  });

  const placeholder = useCallback(
    (time) => (
      <div
        className="cell__placeholder"
        style={{ animationDuration: `${time}ms` }}
      />
    ),
    []
  );

  return (
    <div className="cell">
      <AppearIn
        minutes={minutes}
        seconds={seconds}
        milliseconds={milliseconds}
        placeholder={placeholder}
      >
        <div className="cell__content">
          <div>I appeared after</div>
          <div className="cell__time">
            {minutes}m. {seconds}s. {milliseconds}ms.
          </div>
        </div>
      </AppearIn>
    </div>
  );
};

export default Cell;
