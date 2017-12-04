import spotify from "./spotify";
import jamendo from "./jamendo";
import soundcloud from "./soundcloud";
import uniqId from "uniqid";

export const API_LIST = {
  SPOTIFY: "spotify",
  JAMENDO: "jamendo",
  SOUNDCLOUD: "soundcloud"
};

const apiList = {
  [API_LIST.SPOTIFY]: spotify,
  [API_LIST.JAMENDO]: jamendo,
  [API_LIST.SOUNDCLOUD]: soundcloud
};

const PLAYLISTS = "playlists";

if (!window.localStorage) {
  window.localStorage = {};
}

let api = soundcloud;
window.localStorage.playlists = {};

/**
 * Set the current API used to search song
 * @param configApi
 */
function setApi(configApi) {
  api = apiList[configApi];
}

/**
 * Search songs that match the input query
 * @param {string} query:
 * @returns {array of Song objects}
 */
function search(query) {
  return api(query);
}

/**
 * Should return all the playlist that are owned by the user.
 * @returns {array of Playlist objects}
 */
function getPlaylists() {
  return window.localStorage.playlists;
}

/**
 * @param {string} name: the name of the playlist
 * @returns {Playlist object}
 */
function createPlaylist(name) {
  const id = uniqId();
  const newPlaylist = { name, id, songs: [] };
  const playlists = getPlaylists();
  playlists[id] = newPlaylist;
  window.localStorage.playlists = playlists;
  return newPlaylist;
}

/**
 * Delete a playlist
 * @param id
 */
function deletePlaylist(id) {
  const playlists = getPlaylists();
  delete playlists[id];
  window.localStorage.playlists = playlists;
}

/**
 * @param {*} playlistId
 * @param {Song} song
 */
function addToPlaylist(playlistId, song) {
  const playlists = getPlaylists();
  playlists[playlistId].songs.push(song);
  window.localStorage.playlists = playlists;
}

/**
 * @param {*} playlistId
 * @param {*} songId : the song that should be removed from the playlist
 */
function removeFromPlaylist(playlistId, songId) {
  const playlists = getPlaylists();
  playlists[playlistId].songs = playlists[playlistId].songs.filter(
    song => song.id !== songId
  );
  window.localStorage.playlists = playlists;
}

export default {
  setApi,
  search,
  getPlaylists,
  createPlaylist,
  addToPlaylist,
  removeFromPlaylist,
  deletePlaylist
};
