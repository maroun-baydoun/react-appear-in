import React from 'react';

export type AppearInProps = {
  milliseconds?: number,
  seconds?: number,
  minutes?: number,
};

type AppearInState = {
  visible: boolean,
};

class AppearIn extends React.Component<AppearInProps, AppearInState> {

  constructor(props: AppearInProps) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    const time = this.calculateTime();

    if (time === 0) {
      this.setState({
        visible: true,
      });
    } else {
      setTimeout(
        () => {
          this.setState({
            visible: true,
          });
        },
        time,
      );
    }
  }

  calculateTime = () => {
    const { milliseconds, seconds, minutes } = this.props;

    return (milliseconds || 0) + ((seconds || 0) * 1000) + ((minutes || 0) * 60000);
  }

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <React.Fragment>
        {visible && children}
      </React.Fragment>
    );
  }
}

export default AppearIn ;
