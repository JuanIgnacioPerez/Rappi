import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    this.setState(
      prevState => ({
        value: Number(prevState.value) + 1
      }),
    );
    e.preventDefault();
  }

  decrement(e) {
    e.preventDefault();
    if (this.state.value <= 1) {
      return this.state.value;
    } else {
      this.setState(
        prevState => ({
          value: Number(prevState.value) - 1
        }),
      );
    }
  }

  feed(e) {
    this.setState(
      {
        value: this.value
      },
      function() {
        this.props.updateQuantity(this.state.value);
      }
    );
  }
  
  render() {
    return (
      <div className="counter">
        <a href="/" className="decrement" onClick={this.decrement}>
          –
        </a>
        <input
          className="quantity"
          value={this.state.value}
          onChange={this.feed.bind(this)}
        />
        <a href="/" className="increment" onClick={this.increment}>
          +
        </a>
      </div>
    );
  }
}

export default Counter;
