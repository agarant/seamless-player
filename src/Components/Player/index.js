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
  left: 0;
  right: 0;
  height: 90px !important;
  background-color: #fff;
  z-index: 2;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
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
  }

  render() {
    const { id, currentTime, duration, name, artist, album } = this.props;
    console.log(this.props);
    return (
      <PlayerBox>
        <Title name={name} artist={artist} album={album} />
        <Progress
          color="primary"
          mode="determinate"
          value={currentTime * 100 / duration}
        />
        <div style={{ flex: 1, textAlign: "center" }}>
          <PrevButton {...this.props} />
          <PlayButton {...this.props} />
          <NextButton {...this.props} />
        </div>
        <div style={{ flex: 1 }} />
      </PlayerBox>
    );
  }
}

export default withTheme(withCustomAudio(Player));
