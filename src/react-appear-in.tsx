import React, { useState, useMemo, useEffect } from "react";

export type AppearInProps = {
  milliseconds?: number;
  seconds?: number;
  minutes?: number;

  onAppear?: (time: number) => void;
  placeholder?: (time: number) => React.ReactNode;
};

const AppearIn: React.FC<AppearInProps> = ({
  milliseconds,
  seconds,
  minutes,
  placeholder,
  onAppear,
  children,
}) => {
  const [visible, setVisible] = useState(false);

  const time = useMemo(() => {
    return (milliseconds || 0) + (seconds || 0) * 1000 + (minutes || 0) * 60000;
  }, [milliseconds, seconds, minutes]);

  useEffect(() => {
    const setVisibleTrue = () => {
      setVisible(true);

      if (onAppear) {
        onAppear(time);
      }
    };

    if (time === 0) {
      setVisibleTrue();
    } else {
      setTimeout(setVisibleTrue, time);
    }
  }, [time, onAppear]);

  return (
    <React.Fragment>
      {visible ? children : null}
      {!visible && placeholder ? placeholder(time) : null}
    </React.Fragment>
  );
};

export default AppearIn;
