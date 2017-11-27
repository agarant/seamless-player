// @flow
// This file is shared across the demos.

import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import PlayListIcon from "material-ui-icons/PlaylistPlay";

const playlists = ["Indie", "Blogged 50", "Electro", "Cool Playlist", "Upbeat"];
export const mailFolderListItems = (
  <div>
    {playlists.map(playlistName => (
      <ListItem button>
        <ListItemIcon>
          <PlayListIcon />
        </ListItemIcon>
        <ListItemText primary={playlistName} />
      </ListItem>
    ))}
  </div>
);
