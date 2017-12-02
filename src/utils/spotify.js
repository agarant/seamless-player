import rp from 'request-promise'
import _ from 'lodash';

const API_KEY = process.env.REACT_APP_SPOTIFY_CLIENT_ID

function search(query) {
  const options = {
   uri: 'https://api.spotify.com/v1/search?q=' + query + '&type=track',
   headers: {
    Authorization: 'Bearer ' + API_KEY
   }
  };
  return rp.get(options)
    .then(res => _.filter(JSON.parse(res).tracks.items, track => track.preview_url))
    .then(results => results.map(res => ({
      id: res.id,
      name: res.name,
      artist: res.artists[0].name,
      album: res.album.name,
      src: res.preview_url,
      artwork: res.album.images[0].url,
    })))
}

export default search;
