import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import ApiPicker from "./ApiPicker";

const drawerWidth = 240;

const Bar = styled(AppBar)`
  position: absolute;
  width: calc(100% - ${drawerWidth}px) !important;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  margin-left: ${drawerWidth}px;
`;

const SearchBarWrapper = styled(Toolbar)`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ApiPickerWrapper = styled(Toolbar)`
  position: absolute !important;
  right: 0;
`;

export default ({ search }) => (
  <Bar>
    <SearchBarWrapper>
      <SearchBar search={search} />
    </SearchBarWrapper>
    <ApiPickerWrapper>
      <ApiPicker />
    </ApiPickerWrapper>
  </Bar>
);
