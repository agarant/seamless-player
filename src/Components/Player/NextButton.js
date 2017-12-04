import React from "react";
import styled from "styled-components";
import NextIcon from "material-ui-icons/SkipNext";
import IconButton from "material-ui/IconButton";

const Button = styled(IconButton)`
  color: #616161 !important;
  margin-left: 24px;
  font-size: 18px;
`;

export default ({ onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled}>
    <NextIcon />
  </Button>
);
