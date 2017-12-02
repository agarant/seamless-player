import playlistManager from './playlistManager.js';

afterEach(() => {
  const playlists = playlistManager.getPlaylists();
  for (let id of Object.keys(playlists)) {
    playlistManager.deletePlaylist(id);
  }
});

it('create a playlist and return it', () => {
  const playlist = playlistManager.createPlaylist('testPlaylist');
  expect(playlist.name).toBe('testPlaylist');
});

it('get all created playlist', () => {
  playlistManager.createPlaylist('testPlaylist');
  const playlists = playlistManager.getPlaylists();
  const key = Object.keys(playlists)[0]
  expect(playlists[key].name).toBe('testPlaylist');
});

it('delete a playlist', () => {
  const playlist = playlistManager.createPlaylist('testPlaylist');
  playlistManager.deletePlaylist(playlist.id);
  const playlists = playlistManager.getPlaylists();
  expect(Object.keys(playlists).length).toBe(0);
});

it('add a song to a playlist', () => {
  const playlist = playlistManager.createPlaylist('testPlaylist');
  const song = {'id': 1, 'name': 'something'};
  playlistManager.addToPlaylist(playlist.id, song);
  const playlists = playlistManager.getPlaylists();
  expect(playlists[playlist.id].songs[0].name).toBe('something');
});

it('remove a song from a playlist', () => {
  const playlist = playlistManager.createPlaylist('testPlaylist');
  const song = {'id': 1, 'name': 'something'};
  playlistManager.addToPlaylist(playlist.id, song);
  playlistManager.removeFromPlaylist(playlist.id, 1);
  const playlists = playlistManager.getPlaylists();
  expect(playlists[playlist.id].songs.length).toBe(0);
});
