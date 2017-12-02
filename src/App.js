import React, { Component } from "react";
import logo from "./logo.svg";
import AppBar from "./Components/AppBar";
import teal from "material-ui/colors/teal";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { ThemeProvider } from "styled-components";

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ primary: "#009688" }}>
        <MuiThemeProvider theme={theme}>
          <AppBar />
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
