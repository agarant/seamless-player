import React from "react";
import styled from "styled-components";
import PrevIcon from "material-ui-icons/SkipPrevious";
import IconButton from "material-ui/IconButton";

const Button = styled(IconButton)`
  color: #616161 !important;
  margin-right: 24px;
  font-size: 18px;
`;

export default ({ onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled}>
    <PrevIcon />
  </Button>
);
