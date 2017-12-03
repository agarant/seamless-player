import SC from "soundcloud";

SC.initialize({ client_id: process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID });

function search(query) {
  return SC.get("/tracks/", { q: query }).then(results => {
    const filtered = results.filter(result => result.download_url);
    return filtered.map(result => ({
      id: result.id,
      name: result.title,
      artist: result.user.username,
      url: result.download_url,
      artwork: result.artwork_url
    }));
  });
}

export default search;
