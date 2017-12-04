import React from "react";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import IconButton from "material-ui/IconButton";
import AddIcon from "material-ui-icons/AddCircleOutline";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex !important;
  padding-left: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center !important;
  color: #757575;
`;

export default class DrawerHeader extends React.Component {
  state = {
    open: false,
    name: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false, name: "" });
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  savePlaylist = () => {
    this.props.createPlaylist(this.state.name);
    this.handleRequestClose();
  };

  render() {
    return (
      <HeaderWrapper>
        <div>Playlists</div>
        <IconButton
          aria-label="Create Playlist"
          color="primary"
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          fullWidth={true}
        >
          <DialogTitle>New Playlist</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.savePlaylist}
              color="primary"
              disabled={this.state.name.trim() == ""}
            >
              Create Playlist
            </Button>
          </DialogActions>
        </Dialog>
      </HeaderWrapper>
    );
  }
}
