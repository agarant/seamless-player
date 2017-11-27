import React from "react";
import styled from "styled-components";
import NextIcon from "material-ui-icons/SkipNext";
import IconButton from "material-ui/IconButton";

const Button = styled(IconButton)`
  color: #616161 !important;
  margin-left: 24px;
  font-size: 18px;
`;

class NextButton extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    return false;
  }

  onClick = e => {
    const { soundCloudAudio } = this.props;

    soundCloudAudio && soundCloudAudio.next();
  };

  render() {
    return (
      <Button onClick={this.onClick}>
        <NextIcon />
      </Button>
    );
  }
}

export default NextButton;
