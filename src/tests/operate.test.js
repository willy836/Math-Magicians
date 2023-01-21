// const operate = require('../logic/operate');
import operate from '../logic/operate';

describe('Test operate function', () => {
  it('Add two numbers', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: '+',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe('5');
  });
  it('Subtract two numbers', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: '-',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe('-1');
  });
  it('Multiply two numbers', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: 'x',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe('6');
  });
  it('Divide two numbers', () => {
    const obj = {
      total: '15',
      next: '3',
      operation: '÷',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe('5');
  });
  it('Return modulo of two numbers', () => {
    const obj = {
      total: '10',
      next: '3',
      operation: '%',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe('1');
  });
  it('Find modulo of a number and 0', () => {
    const obj = {
      total: '10',
      next: '0',
      operation: '%',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });
});
