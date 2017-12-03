import React from "react";
import Button from "material-ui/Button";
import Menu, { MenuItem } from "material-ui/Menu";
import PlaylistManager, { API_LIST } from "../../utils/playlistManager";

class ApiPicker extends React.Component {
  constructor(props) {
    super(props);

    PlaylistManager.setApi("spotify");
    this.state = {
      anchorEl: null,
      open: false,
      api: "spotify"
    };
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  selectApi = api => () => {
    this.setState({
      api
    });
    PlaylistManager.setApi(api);
    this.handleRequestClose();
  };

  render() {
    return (
      <div>
        <Button
          style={{ color: "#FAFAFA" }}
          aria-owns={this.state.open ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          API: {this.state.api}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.selectApi(API_LIST.SPOTIFY)}>
            Spotify
          </MenuItem>
          <MenuItem onClick={this.selectApi(API_LIST.SOUNDCLOUD)}>
            Soundcloud
          </MenuItem>
          <MenuItem onClick={this.selectApi(API_LIST.JAMENDO)}>
            Jamendo
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ApiPicker;
