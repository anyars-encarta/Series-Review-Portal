// fetchLikes.js

const fetchLikes = async (appId, itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const response = await fetch(url);
  const data = await response.json();

  // Find the item with the given itemId and get its likes count
  const item = data.find((item) => item.item_id === itemId);
  return item ? item.likes : 0;
};

export default fetchLikes;
