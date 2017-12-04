import React from "react";
import PlayIcon from "material-ui-icons/PlayCircleFilled";
import PauseIcon from "material-ui-icons/PauseCircleFilled";
import IconButton from "material-ui/IconButton";

export default ({ onClick, disabled, playing }) => (
  <IconButton
    onClick={onClick}
    color="primary"
    style={{ transform: "scale(2.3)" }}
    disabled={disabled}
  >
    {playing ? <PauseIcon /> : <PlayIcon />}
  </IconButton>
);
