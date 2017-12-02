import spotify from './spotify';
import jamendo from './jamendo';
import soundcloud from './soundcloud';
import uniqId from 'uniqId';

const apiList = {
  'spotify': spotify,
  'jamendo': jamendo,
  'soundcloud': soundcloud
};

const playlists = {};
let api = soundcloud;

/**
 * Set the current API used to search song
 * @param configApi
 */
function setApi(configApi) {
  api = apiList[configApi]
}

/**
 * Search songs that match the input query
 * @param {string} query:
 * @returns {array of Song objects}
 */
function search(query) {
  return api.search(query);
}

/**
 * Should return all the playlist that are owned by the user.
 * @returns {array of Playlist objects}
 */
function getPlaylists() {
  return playlists;
}

/**
 * @param {string} name: the name of the playlist
 * @returns {Playlist object}
 */
function createPlaylist(name) {
  const id = uniqId();
  const newPlaylist = {name, id, songs:[]};
  playlists[id] = newPlaylist;
  return newPlaylist;
}

function deletePlaylist(id) {
  delete playlists[id];
}

/**
 * @param {*} playlistId
 * @param {Song} song
 */
function addToPlaylist(playlistId, song) {
  playlists[playlistId].songs.push(song);
}

/**
 * @param {*} playlistId
 * @param {*} songId : the song that should be removed from the playlist
 */
function removeFromPlaylist(playlistId, songId) {
  playlists[playlistId].songs = playlists[playlistId].songs.filter(song => song.id !== songId);
}


export default setApi;
export default search;
export default getPlaylists;
export default createPlaylist;
export default addToPlaylist;
export default removeFromPlaylist;
export default deletePlaylist;
