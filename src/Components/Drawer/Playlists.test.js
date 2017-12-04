import React from "react";
import renderer from "react-test-renderer";
import Playlists from "./Playlists";

test("<Playlists /> renders no list item when the playlists object is empyt", () => {
  const tree = renderer.create(<Playlists playlists={{}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("<Playlists /> renders the playlist names", () => {
  const mockPlaylists = {
    "1": {
      name: "Blogged 50"
    },
    "2": {
      name: "Thumbs up"
    }
  };
  const tree = renderer
    .create(<Playlists playlists={mockPlaylists} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
