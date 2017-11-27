import React from "react";
import styled from "styled-components";
import ButtonBase from "material-ui/ButtonBase";
import PrevIcon from "material-ui-icons/SkipPrevious";
import IconButton from "material-ui/IconButton";

const Button = styled(IconButton)`
  color: #616161 !important;
  margin-right: 24px;
  font-size: 18px;
`;

class PrevButton extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    return false;
  }

  onClick = e => {
    const { soundCloudAudio } = this.props;

    soundCloudAudio && soundCloudAudio.previous();
  };

  render() {
    return (
      <Button onClick={this.onClick}>
        <PrevIcon />
      </Button>
    );
  }
}

export default PrevButton;
