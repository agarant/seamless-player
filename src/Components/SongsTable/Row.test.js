import React from "react";
import renderer from "react-test-renderer";
import Row from "./Row";

test("<Row /> renders properly", () => {
  const mockSong = {
    id: "1234",
    name: "Atlas",
    artist: "Luke Christopher",
    album: "TMRW",
    artwork: "mockUrl",
    url: "mockOtherUrl"
  };
  const tree = renderer.create(<Row song={mockSong} playlists={{}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
