import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorObj, setCalculatorObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const btnName = e.target.innerHTML;
    setCalculatorObj((currentState) => calculate(
      {
        total: currentState.total,
        next: currentState.next,
        operation: currentState.operation,
      },
      btnName,
    ));
  };

  const { total, next, operation } = calculatorObj;
  return (
    <>
      <div className="cal-homepage">
        <h2>Let&apos;s do some math!</h2>
        <div className="calculator">
          <div className="grid-item grid-item1">
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </div>
          <button
            type="button"
            name="AC"
            className="grid-item"
            onClick={handleClick}
          >
            AC
          </button>
          <button
            type="button"
            name="+/-"
            className="grid-item"
            onClick={handleClick}
          >
            +/-
          </button>
          <button
            type="button"
            name="%"
            className="grid-item"
            onClick={handleClick}
          >
            %
          </button>
          <button
            type="button"
            name="÷"
            className="grid-item orange-bg"
            onClick={handleClick}
          >
            ÷
          </button>
          <button
            type="button"
            name="7"
            className="grid-item"
            onClick={handleClick}
          >
            7
          </button>
          <button
            type="button"
            name="8"
            className="grid-item"
            onClick={handleClick}
          >
            8
          </button>
          <button
            type="button"
            name="9"
            className="grid-item"
            onClick={handleClick}
          >
            9
          </button>
          <button
            type="button"
            name="x"
            className="grid-item orange-bg"
            onClick={handleClick}
          >
            x
          </button>
          <button
            type="button"
            name="4"
            className="grid-item"
            onClick={handleClick}
          >
            4
          </button>
          <button
            type="button"
            name="5"
            className="grid-item"
            onClick={handleClick}
          >
            5
          </button>
          <button
            type="button"
            name="6"
            className="grid-item"
            onClick={handleClick}
          >
            6
          </button>
          <button
            type="button"
            name="-"
            className="grid-item orange-bg"
            onClick={handleClick}
          >
            -
          </button>
          <button
            type="button"
            name="1"
            className="grid-item"
            onClick={handleClick}
          >
            1
          </button>
          <button
            type="button"
            name="2"
            className="grid-item"
            onClick={handleClick}
          >
            2
          </button>
          <button
            type="button"
            name="3"
            className="grid-item"
            onClick={handleClick}
          >
            3
          </button>
          <button
            type="button"
            name="+"
            className="grid-item orange-bg"
            onClick={handleClick}
          >
            +
          </button>
          <button
            type="button"
            name="0"
            className="grid-item grid-item0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            type="button"
            name="."
            className="grid-item"
            onClick={handleClick}
          >
            .
          </button>
          <button
            type="button"
            name="="
            className="grid-item orange-bg"
            onClick={handleClick}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
