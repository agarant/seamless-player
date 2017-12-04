import React from "react";
import renderer from "react-test-renderer";
import PlayButton from "./PlayButton";

test("<PlayButton /> renders the proper icon when playing", () => {
  const tree = renderer
    .create(<PlayButton playing={true} disabled={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
