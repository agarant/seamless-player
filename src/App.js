import React, { Component } from "react";
import SeamlessPlayer from "./SeamlessPlayer";
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
          <SeamlessPlayer />
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
