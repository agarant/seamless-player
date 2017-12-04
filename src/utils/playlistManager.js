import spotify from "./spotify";
import jamendo from "./jamendo";
import soundcloud from "./soundcloud";
import uniqId from "uniqid";
import storage from "./storage";

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
let playlists = {};

function init() {
  playlists = storage.get(PLAYLISTS) ? JSON.parse(storage.get(PLAYLISTS)) : {};
}

let api = soundcloud;

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
  return playlists;
}

/**
 * @param {string} name: the name of the playlist
 * @returns {Playlist object}
 */
function createPlaylist(name) {
  const id = uniqId();
  const newPlaylist = { name, id, songs: [] };
  playlists[id] = newPlaylist;
  _refreshStorage();
  return newPlaylist;
}

/**
 * Delete a playlist
 * @param id
 */
function deletePlaylist(id) {
  delete playlists[id];
  _refreshStorage();
}

/**
 * @param {*} playlistId
 * @param {Song} song
 */
function addToPlaylist(playlistId, song) {
  playlists[playlistId].songs.push(song);
  _refreshStorage();
}

/**
 * @param {*} playlistId
 * @param {*} songId : the song that should be removed from the playlist
 */
function removeFromPlaylist(playlistId, songId) {
  playlists[playlistId].songs = playlists[playlistId].songs.filter(
    song => song.id !== songId
  );
  _refreshStorage();
}

function _refreshStorage() {
  storage.put(PLAYLISTS, JSON.stringify(playlists));
}

export default {
  setApi,
  search,
  getPlaylists,
  createPlaylist,
  addToPlaylist,
  removeFromPlaylist,
  deletePlaylist,
  init
};
