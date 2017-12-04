import React from "react";
import renderer from "react-test-renderer";
import NextButton from "./NextButton";

test("<NextButton /> renders the proper icon when playing", () => {
  const tree = renderer.create(<NextButton disabled={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
