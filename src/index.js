import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    console.log('props');
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerId = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    // 改变 state 值， 固定写法
    console.log('tick');

    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;

    console.log('date', date);

    return (
      <div>
        <h2>现在是 {date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#root'));
