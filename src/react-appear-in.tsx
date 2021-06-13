import React, { useState, useMemo, useEffect, useRef } from "react";

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
  const time = useMemo(() => {
    return (milliseconds || 0) + (seconds || 0) * 1000 + (minutes || 0) * 60000;
  }, [milliseconds, seconds, minutes]);

  const timeOutRef = useRef<NodeJS.Timeout | null>(null);
  const [visible, setVisible] = useState(time === 0);

  useEffect(() => {
    const setVisibleTrue = () => {
      setVisible(true);
    };

    if (time === 0) {
      setVisibleTrue();
    } else {
      timeOutRef.current = setTimeout(setVisibleTrue, time);
    }

    return () => {
      if (timeOutRef.current !== null) {
        clearTimeout(timeOutRef.current);
        timeOutRef.current = null;
      }
      setVisible(false);
    };
  }, [time, onAppear]);

  useEffect(() => {
    if (visible && onAppear) {
      onAppear(time);
    }
  }, [visible, onAppear]);

  return (
    <React.Fragment>
      {visible ? children : null}
      {!visible && placeholder ? placeholder(time) : null}
    </React.Fragment>
  );
};

export default AppearIn;
