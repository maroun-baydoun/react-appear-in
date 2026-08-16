import React, { useEffect, useMemo, useRef, useState } from "react";

export type AppearInProps = {
  milliseconds?: number;
  seconds?: number;
  minutes?: number;

  onAppear?: (time: number) => void;
  placeholder?: (time: number) => React.ReactNode;
};

const AppearIn: React.FC<React.PropsWithChildren<AppearInProps>> = ({
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

  const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
  }, [time]);

  useEffect(() => {
    if (visible && onAppear) {
      onAppear(time);
    }
  }, [visible, onAppear, time]);

  return (
    <React.Fragment>
      {visible ? children : null}
      {!visible && placeholder ? placeholder(time) : null}
    </React.Fragment>
  );
};

export default AppearIn;
