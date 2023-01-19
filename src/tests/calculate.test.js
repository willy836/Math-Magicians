// const calculate = require('../logic/calculate');
import calculate from "../logic/calculate";

describe("Test calculate function", () => {
  it("Test when AC button is clicked ", () => {
    const obj = { total: null, next: null, operation: null };
    const buttonName = "AC";
    expect(calculate(obj, buttonName)).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it("Test adding two numbers then click =", () => {
    const obj = {
      total: "0",
      next: "5",
      operation: "+",
    };
    const buttonName = "=";
    expect(calculate(obj, buttonName)).toEqual({
      total: "5",
      next: null,
      operation: null,
    });
  });
  it("Test adding three or more numbers", () => {
    const obj = {
      total: "5",
      next: "5",
      operation: "+",
    };
    const buttonName = "+";
    expect(calculate(obj, buttonName)).toEqual({
      total: "10",
      next: null,
      operation: "+",
    });
  });
  it("Test button is 0 and next is 0 and no operation is clicked", () => {
    const obj = {
      total: 0,
      next: 0,
      operation: null,
    };
    const buttonName = "=";
    expect(calculate(obj, buttonName)).toEqual({});
  });
});
