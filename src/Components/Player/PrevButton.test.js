import React from "react";
import renderer from "react-test-renderer";
import PrevButton from "./NextButton";

test("<PrevButton /> renders the proper icon when playing", () => {
  const tree = renderer.create(<PrevButton disabled={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
