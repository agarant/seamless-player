import rp from 'request-promise'

const CLIENT_ID = process.env.REACT_APP_JAMENDO_CLIENT_ID;

function search(query) {
  return rp.get('https://api.jamendo.com/v3.0/tracks/?client_id=' + CLIENT_ID + '&search=' + query)
  .then(JSON.parse)
  .then(res => {
      const results = res.results;
      return results.map(result => ({
        id: result.id,
        name: result.name,
        artist: result.artist_name,
        src: result.audio,
        artwork: result.image,
      }));
    })
}

export default search;

