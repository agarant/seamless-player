// @flow
// This file is shared across the demos.

import React from "react";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import PlayListIcon from "material-ui-icons/PlaylistPlay";

export default ({ playlists, selectPlaylist }) => (
  <List>
    <div>
      {Object.keys(playlists).map(key => (
        <ListItem button onClick={() => selectPlaylist(key)}>
          <ListItemIcon>
            <PlayListIcon />
          </ListItemIcon>
          <ListItemText primary={playlists[key].name} />
        </ListItem>
      ))}
    </div>
  </List>
);
