import spotify from "./../api/spotify";
import jamendo from "./../api/jamendo";
import soundcloud from "./../api/soundcloud";
import uniqId from "uniqid";
import storage from "./../../utils/storage";

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

function getCurrentApi() {
  return api;
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
 * @param {*} playlistId
 * @param {Song} song
 */
function addToPlaylist(playlistId, song) {
  playlists[playlistId].songs.push(song);
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
  init,
  getCurrentApi
};
