// addLike.js

import updateCount from './updateLikeCount.js';
import fetchLikes from './fetchLikes.js';

async function addLike(appId, itemId) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const requestBody = {
    item_id: itemId,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (response.status === 201) {
    const updatedLikes = await fetchLikes(appId, itemId); // Fetch updated likes count
    updateCount('likes', itemId, updatedLikes); // Update the likes count immediately
    return updatedLikes; // Return the updated likes count
  }
  // Handle error here
  throw new Error('Failed to add like');
}

export default addLike;
