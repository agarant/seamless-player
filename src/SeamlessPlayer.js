import React from "react";
import styled from "styled-components";
import Player from "./Components/Player";
import SongsList from "./Components/SongsList";
import TopBar from "./Components/TopBar";
import Drawer from "./Components/Drawer";
import PlayListManager from "./utils/playlistManager";
import Snackbar from "./Components/Snackbar";
import Typography from "material-ui/Typography";

const drawerWidth = 240;

const Root = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

const AppFrame = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  background-color: theme.palette.background.default;
  width: 100%;
  padding: 0;
  height: calc(100% - 56px);
  margin-top: 56px;
  position: relative;
`;

const Content = styled.div`
  height: 100%;
  padding: 24px;
`;

class SeamlessPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlists: PlayListManager.getPlaylists(),
      snackbarOpen: false,
      playlistId: null
    };
  }

  search = query => {
    PlayListManager.search(query).then(songs => {
      this.setState({
        searchResults: songs,
        playlistId: null
      });
    });
  };

  playSong = song => {
    const sourceSongs = this.state.playlistId
      ? this.state.playlists[this.state.playlistId].songs
      : this.state.searchResults;

    let found = false;
    const songs = sourceSongs.reduce((acc, s) => {
      if (s.id === song.id) {
        found = true;
      }
      if (found) {
        acc.push(s);
      }
      return acc;
    }, []);

    console.log(songs);
    this.setState({
      songs
    });
  };

  selectPlaylist = id => {
    this.setState({
      searchResults: this.state.playlists[id].songs,
      playlistId: id
    });
  };

  createPlaylist = name => {
    PlayListManager.createPlaylist(name);
    this._refreshPlaylists();
  };

  addToPlaylist = (id, song) => {
    PlayListManager.addToPlaylist(id, song);
    this.setState({
      snackbarOpen: true
    });
    setTimeout(() => {
      this.setState({
        snackbarOpen: false
      });
    }, 3000);
    this._refreshPlaylists();
  };

  _refreshPlaylists = () =>
    this.setState({
      playlists: PlayListManager.getPlaylists()
    });

  render() {
    return (
      <Root>
        <AppFrame>
          <TopBar search={this.search} />
          <Drawer
            createPlaylist={this.createPlaylist}
            selectPlaylist={this.selectPlaylist}
            playlists={this.state.playlists}
          />
          <Main>
            <Content>
              {!this.state.playlistId ? null : (
                <Typography
                  type="display2"
                  style={{
                    color: "rgba(0, 0, 0, 0.87)",
                    margin: "64px 0 40px 0"
                  }}
                >
                  {" "}
                  {this.state.playlists[this.state.playlistId].name}
                </Typography>
              )}
              <SongsList
                songs={this.state.searchResults}
                playsong={this.playSong}
                playlists={this.state.playlists}
                addToPlaylist={this.addToPlaylist}
              />
            </Content>
            <Player
              clientId={process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID}
              {...this.state.song}
              preload="none"
              streamUrl={this.state.song ? this.state.song.url : ""}
              playSongs={this.playSongs}
              songs={this.state.songs}
            />
          </Main>
        </AppFrame>
        <Snackbar open={this.state.snackbarOpen} />
      </Root>
    );
  }
}

export default SeamlessPlayer;
