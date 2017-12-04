import React from "react";
import Table, {
  TableBody,
  TableHead,
  TableCell,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import styled from "styled-components";
import Row from "./Row";

const StyledTable = styled(Table)`
  minwidth: 700px;
`;

const Root = styled(Paper)`
  width: 100%;
  overflow-x: "auto";
`;

export default ({ songs, playsong, playlists, addToPlaylist }) => (
  <Root>
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Artist</TableCell>
          <TableCell>Album</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {songs.map(n => (
          <Row
            song={n}
            playsong={playsong}
            playlists={playlists}
            addToPlaylist={addToPlaylist}
          />
        ))}
      </TableBody>
    </StyledTable>
  </Root>
);
