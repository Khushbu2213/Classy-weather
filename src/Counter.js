import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecreement = this.handleDecreement.bind(this);
    this.handleIncreement = this.handleIncreement.bind(this);
  }

  handleIncreement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  handleDecreement() {
    // if (this.state.count > 0) {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
    // }
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecreement}>-</button>
        <span>
          {date.toDateString()} {this.state.count}
        </span>
        <button onClick={this.handleIncreement}>+</button>
      </div>
    );
  }
}

export default Counter;
