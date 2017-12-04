import React from "react";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List from "material-ui/List";
import Playlists from "./Playlists";
import styled from "styled-components";
import { withStyles } from "material-ui/styles";
import DrawerHeader from "./DrawerHeader";

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth
  }
});

const LeftDrawer = ({ playlists, classes, createPlaylist, selectPlaylist }) => (
  <Drawer
    type="permanent"
    anchor="left"
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <DrawerHeader createPlaylist={createPlaylist} />
    <Divider />{" "}
    <Playlists playlists={playlists} selectPlaylist={selectPlaylist} />{" "}
  </Drawer>
);

export default withStyles(styles)(LeftDrawer);
