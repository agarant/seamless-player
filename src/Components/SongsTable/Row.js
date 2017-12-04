import React from "react";
import { TableCell, TableRow } from "material-ui/Table";
import { HoverHOC } from "../../utils";
import styled from "styled-components";
import PlaylistAdd from "material-ui-icons/PlaylistAdd";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";

const MyTableRow = styled(TableRow)`
  &:hover {
    cursor: pointer;
  }
`;

const ButtonBox = styled.td`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin-right: 25px;
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

  addToPlayList = id => e => {
    e.stopPropagation();
    this.props.addToPlaylist(id, this.props.song);
    this.handleRequestClose();
  };

  renderAddButton = () => {
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
    const { name, artist, album, artwork } = this.props.song;

    return (
      <MyTableRow hover={true} {...this.props} onClick={this.rowClicked}>
        <TableCell style={{ display: "flex", alignItems: "center" }}>
          <img
            src={artwork}
            height={36}
            width={36}
            style={{ marginRight: 10 }}
            alt="artwork"
          />
          {name}
        </TableCell>
        <TableCell>{artist}</TableCell>
        <TableCell>{album}</TableCell>
        <TableCell style={{ position: "relative" }}>
          {this.renderAddButton()}
        </TableCell>
      </MyTableRow>
    );
  }
}

export default HoverHOC(Row);
