// Fetching data from tv maze API.
const fetchLatestShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
};

export default fetchLatestShows;
