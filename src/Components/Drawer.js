import React from "react";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List from "material-ui/List";
import { userLists } from "./Playlists";
import styled from "styled-components";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import AddIcon from "material-ui-icons/AddCircleOutline";

const drawerWidth = 240;

const DrawerHeader = styled.div`
  display: flex !important;
  padding-left: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center !important;
  color: #757575;
`;

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth
  },
  drawerHeader: theme.mixins.toolbar
});

const LeftDrawer = ({ playlists, classes }) => (
  <Drawer
    type="permanent"
    anchor="left"
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <DrawerHeader className={classes.drawerHeader}>
      <div>Playlists</div>
      <IconButton aria-label="Create Playlist" color="primary">
        <AddIcon />
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List> {userLists} </List>
  </Drawer>
);

export default withStyles(styles)(LeftDrawer);
