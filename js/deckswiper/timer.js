import React from 'react';
import {Text} from 'react-native';

const pad = (str) => (str.length < 2) ? `0${str}` : str;

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remaining: props.remaining
    };
  }

  tick = () => {
    const {remaining} = this.state;

    if (remaining > 0) {
      this.setState({remaining: remaining - 1});

      if (remaining === 1) this.props.onTimeout();
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const hours = Math.floor(this.state.remaining / 3600);
    const minutes = Math.floor((this.state.remaining - hours * 3600) / 60);
    const seconds = this.state.remaining - hours * 3600 - minutes * 60;

    return (
      <Text style={this.props.style}>
        {pad(String(hours))}:{pad(String(minutes))}:{pad(String(seconds))}
      </Text>
    );
  }
}

export default Timer;
