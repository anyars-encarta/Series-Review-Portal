const fetchComments = async (appId, itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`;
  const response = await fetch(url);

  if (response.ok) {
    const comments = await response.json();
    return comments;
  } if (response.status === 400) {
    // Return an empty array when there are no comments or a 400 status code
    return [];
  }
  throw new Error('Failed to fetch comments');
};

export default fetchComments;
