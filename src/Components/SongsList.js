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

const options = ["Indie", "Blogged 50", "Electro", "Cool Playlist", "Upbeat"];

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
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  };

  rowClicked = () => {
    console.log(this.props.id);
  };

  renderButtons() {
    if (!this.props.hovered) return null;
    const open = Boolean(this.state.anchorEl);

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
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={this.handleRequestClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </ButtonBox>
    );
  }

  render() {
    const { id, name, artist, album, hovered } = this.props;
    return (
      <MyTableRow key={id} hover={true} {...this.props}>
        <TableCell>{name}</TableCell>
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
    const { classes } = this.props;

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
          <TableBody>{data.map(n => <HoverRow {...n} />)}</TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(SongsList);
