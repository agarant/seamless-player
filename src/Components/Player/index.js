import React from "react";
import styled, { withTheme } from "styled-components";
import { withCustomAudio } from "react-soundplayer/addons";
import { LinearProgress } from "material-ui/Progress";
import PlayButton from "./PlayButton";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import Title from "./Title";

const PlayerBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 90px !important;
  background-color: #fff;
  z-index: 2;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Progress = styled(LinearProgress)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
`;

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: null,
      playing: false
    };
  }

  componentDidMount() {
    this.props.soundCloudAudio.on("ended", this._nextSong);
  }

  _nextSong = () => {
    if (this.state.playingIndex + 1 < this.props.songs.length) {
      this.setState({
        playingIndex: this.state.playingIndex + 1,
        song: this.props.songs[this.state.playingIndex + 1]
      });
    } else {
      this.setState({
        song: null
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.songs !== nextProps.songs) {
      this.setState(
        {
          playingIndex: 0,
          song: nextProps.songs[0]
        },
        this.play
      );
    }
  }

  play = () => {
    this.props.soundCloudAudio.play({
      streamUrl: this.state.song.url
    });
    this.setState({ playing: true });
  };

  pause = () => {
    this.props.soundCloudAudio.pause();
    this.setState({ playing: false });
  };

  playPauseClicked = () => {
    if (this.state.playing) {
      this.pause();
    } else {
      this.play();
    }
  };

  _setPlayingIndex = index => {
    this.setState(
      {
        playingIndex: index,
        song: this.props.songs[index]
      },
      this.play
    );
  };

  nextClicked = () => {
    this._setPlayingIndex(this.state.playingIndex + 1);
  };

  prevClicked = () => {
    this._setPlayingIndex(this.state.playingIndex - 1);
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <PlayerBox>
        {!this.state.song ? null : (
          <img
            src={this.state.song.artwork}
            height={90}
            width={90}
            style={{ backgroundColor: "#fafafa" }}
          />
        )}
        {!this.state.song ? null : (
          <Title
            name={this.state.song.name}
            artist={this.state.song.artist}
            album={this.state.song.album}
          />
        )}
        {!this.state.song ? null : (
          <Progress
            color="primary"
            mode="determinate"
            value={this.props.currentTime * 100 / this.props.duration}
          />
        )}
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            left: 0,
            right: 0
          }}
        >
          <PrevButton
            onClick={this.prevClicked}
            disabled={!this.state.song || this.state.playingIndex === 0}
          />
          <PlayButton
            onClick={this.playPauseClicked}
            disabled={!this.state.song}
            playing={this.state.playing}
          />
          <NextButton
            onClick={this.nextClicked}
            disabled={
              !this.state.song ||
              this.state.playingIndex + 1 === this.props.songs.length
            }
          />
        </div>
      </PlayerBox>
    );
  }
}

export default withTheme(withCustomAudio(Player));
