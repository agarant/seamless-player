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

  render() {
    return (
      <IconButton
        onClick={this.props.onClick}
        color="primary"
        style={{ transform: "scale(2.3)" }}
        disabled={this.props.disabled}
      >
        {this.props.playing ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
    );
  }
}

export default withTheme(PlayButton);
