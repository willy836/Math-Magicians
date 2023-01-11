import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const btnName = e.target.innerHTML;
    this.setState((currentState) => calculate(
      {
        total: currentState.total,
        next: currentState.next,
        operation: currentState.operation,
      },
      btnName,
    ));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="grid-item grid-item1">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          AC
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          +/-
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          %
        </button>
        <button
          type="button"
          className="grid-item orange-bg"
          onClick={this.handleClick}
        >
          ÷
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          7
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          8
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          9
        </button>
        <button
          type="button"
          className="grid-item orange-bg"
          onClick={this.handleClick}
        >
          x
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          4
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          5
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          6
        </button>
        <button
          type="button"
          className="grid-item orange-bg"
          onClick={this.handleClick}
        >
          -
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          1
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          2
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          3
        </button>
        <button
          type="button"
          className="grid-item orange-bg"
          onClick={this.handleClick}
        >
          +
        </button>
        <button
          type="button"
          className="grid-item grid-item0"
          onClick={this.handleClick}
        >
          0
        </button>
        <button type="button" className="grid-item" onClick={this.handleClick}>
          .
        </button>
        <button
          type="button"
          className="grid-item orange-bg"
          onClick={this.handleClick}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
