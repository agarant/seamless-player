// @flow
// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MailIcon from 'material-ui-icons/PlaylistPlay';
import ReportIcon from 'material-ui-icons/Report';

const playlists = ['Indie', 'Blogged 50', 'Electro', 'Cool Playlist', 'Upbeat']
export const mailFolderListItems = (
  <div>
  {playlists.map(playlistName =><ListItem button>
   <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary={playlistName} />
    </ListItem> )}

  </div>
);
