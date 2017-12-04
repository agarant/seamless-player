import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import { HoverHOC } from "../utils";
import styled from "styled-components";
import PlaylistAdd from "material-ui-icons/PlaylistAdd";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, artist, album) {
  id += 1;
  return { id, name, artist, album };
}

const data = [
  createData("Sweetest Thing", "Allman Brown", "1000 Years"),
  createData("Karma", "Tom Walker", "Blessing - EP"),
  createData("Pale Sun Rose", "Matthew And The Atlas", "Other Rivers"),
  createData("Love Like This", "Wild Belle", "Isles")
];

const ButtonBox = styled.td`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

const MyTableRow = styled(TableRow)`
  &:hover {
    cursor: pointer;
  }
`;
const ITEM_HEIGHT = 48;

class Row extends React.Component {
  state = {
    anchorEl: null
  };

  addToPlaylistClicked = event => {
    event.stopPropagation();
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  };

  rowClicked = () => {
    this.props.playsong(this.props.song);
  };

  addToPlayList = id => () => {
    this.props.addToPlaylist(id, this.props.song);
    this.handleRequestClose();
  };

  renderButtons = () => {
    if (!this.props.hovered) return null;
    const open = Boolean(this.state.anchorEl);

    const { playlists } = this.props;
    return (
      <ButtonBox>
        <IconButton onClick={this.addToPlaylistClicked}>
          <PlaylistAdd />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={open}
          onRequestClose={this.handleRequestClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {Object.keys(playlists).map(key => (
            <MenuItem
              key={playlists[key].id}
              onClick={this.addToPlayList(playlists[key].id)}
            >
              {playlists[key].name}
            </MenuItem>
          ))}
        </Menu>
      </ButtonBox>
    );
  };

  render() {
    const { id, name, artist, album, artwork } = this.props.song;
    const { hovered } = this.props;
    return (
      <MyTableRow
        key={id}
        hover={true}
        {...this.props}
        onClick={this.rowClicked}
      >
        <TableCell style={{ display: "flex", alignItems: "center" }}>
          <img
            src={artwork}
            height={36}
            width={36}
            style={{ marginRight: 10 }}
          />
          {name}
        </TableCell>
        <TableCell>{artist}</TableCell>
        <TableCell>{album}</TableCell>
        <TableCell style={{ position: "relative" }}>
          {this.renderButtons()}
        </TableCell>
      </MyTableRow>
    );
  }
}

const HoverRow = HoverHOC(Row);

class SongsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, playsong, playlists, addToPlaylist } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Album</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.songs.map(n => (
              <HoverRow
                song={n}
                playsong={playsong}
                playlists={playlists}
                addToPlaylist={addToPlaylist}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(SongsList);
