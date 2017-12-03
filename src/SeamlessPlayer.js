import React from "react";
import styled from "styled-components";
import Player from "./Components/Player";
import SongsList from "./Components/SongsList";
import TopBar from "./Components/TopBar";
import Drawer from "./Components/Drawer";
import PlayListManager from "./utils/playlistManager";

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
      searchResults: []
    };
  }

  search = query => {
    PlayListManager.search(query).then(songs => {
      this.setState({
        searchResults: songs
      });
    });
  };

  playSong = song => {
    console.log("PLAYER", this.player);
    this.setState({ song });
  };

  render() {
    return (
      <Root>
        <AppFrame>
          <TopBar search={this.search} />
          <Drawer />
          <Main>
            <Content>
              <SongsList
                songs={this.state.searchResults}
                playSong={this.playSong}
              />
            </Content>
            <Player
              clientId={process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID}
              {...this.state.song}
              preload="none"
              streamUrl={this.state.song ? this.state.song.url : ""}
            />
          </Main>
        </AppFrame>
      </Root>
    );
  }
}

export default SeamlessPlayer;
