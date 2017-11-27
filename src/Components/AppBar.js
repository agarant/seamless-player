/* eslint-disable flowtype/require-valid-file-annotation */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import List from "material-ui/List";
import { MenuItem } from "material-ui/Menu";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import { mailFolderListItems } from "./tileData";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Player from "./Player";

const drawerWidth = 240;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {
    position: "absolute",
    width: `calc(100% - ${drawerWidth}px)`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  "appBar-left": {
    marginLeft: drawerWidth
  },
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: 0,
    height: "calc(100% - 56px)",
    marginTop: 56,
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64
    }
  },
  searchBar: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  title: {
    position: "absolute",
    left: 0
  }
});

class PermanentDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const drawer = (
      <Drawer
        type="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.drawerHeader} />
        <Divider />
        <List>{mailFolderListItems}</List>
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, classes["appBar-left"])}
          >
            <Toolbar className={classes.title}>
              <Typography type="title" color="inherit" noWrap>
                Seamles Player
              </Typography>
            </Toolbar>
            <Toolbar className={classes.searchBar}>
              <SearchBar />
            </Toolbar>
          </AppBar>
          {drawer}
          <main className={classes.content}>
            <Content>
              <Typography type="body1">
                {"You think water moves fast? You should see ice."}
              </Typography>
            </Content>
            <Player
              name="J'arrive en retard"
              artist="Klo Pelgag"
              album="L'etoile thoracique"
            />
          </main>
        </div>
      </div>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PermanentDrawer);
