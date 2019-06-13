import React from 'react';

export type AppearInProps = {
  milliseconds?: number,
  seconds?: number,
  minutes?: number,

  onAppear?: (time: number) => void,
  placeholder?: (time: number) => React.ReactNode,
};

type AppearInState = {
  visible: boolean,
};

class AppearIn extends React.Component<AppearInProps, AppearInState> {

  state = {
    visible: false,
  };

  componentDidMount() {
    const time = this.calculateTime();

    const onStateUpdated = () => {
      const { onAppear } = this.props;

      if (onAppear) {
        onAppear(time);
      }
    };

    const updateState = () => {
      this.setState(
        {
          visible: true,
        },
        onStateUpdated,
      );
    };

    if (time === 0) {
      updateState();
    } else {
      setTimeout(
        updateState,
        time,
      );
    }
  }

  calculateTime = () => {
    const { milliseconds, seconds, minutes } = this.props;

    return (milliseconds || 0) + ((seconds || 0) * 1000) + ((minutes || 0) * 60000);
  }

  render() {
    const { children, placeholder } = this.props;
    const { visible } = this.state;

    return (
      <React.Fragment>
        {visible && children}
        {!visible && placeholder && placeholder(this.calculateTime())}
      </React.Fragment>
    );
  }
}

export default AppearIn ;
