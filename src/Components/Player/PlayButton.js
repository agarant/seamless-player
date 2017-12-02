import React from "react";
import Button from "material-ui/Button";
import PlayIcon from "material-ui-icons/PlayCircleFilled";
import PauseIcon from "material-ui-icons/PauseCircleFilled";
import IconButton from "material-ui/IconButton";
import { withTheme } from "styled-components";

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
  }

  onClick = e => {
    const { playing, soundCloudAudio, onTogglePlay } = this.props;

    if (!playing) {
      soundCloudAudio &&
        soundCloudAudio.play({
          playlistIndex: soundCloudAudio._playlistIndex
        });
      this.setState({ playing: true });
    } else {
      soundCloudAudio && soundCloudAudio.pause();
      this.setState({ playing: false });
    }

    onTogglePlay && onTogglePlay(e);
  };

  render() {
    return (
      <IconButton
        onClick={this.onClick}
        color="primary"
        style={{ transform: "scale(2.3)" }}
      >
        {this.state.playing ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
    );
  }
}

export default withTheme(PlayButton);