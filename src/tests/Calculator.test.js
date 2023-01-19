import React from "react";
import renderer from "react-test-renderer";
import Calculator from "../components/Calculator";
import Quote from "../components/Quote";
import Home from "../components/Home";

describe("Calculator component renders correctly", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should match the snapshot", () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should match the snapshot", () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
