const fetchComments = async (appId, itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`;
  const response = await fetch(url);

  if (response.ok) {
    const comments = await response.json();
    return comments;
  }
  throw new Error('Failed to fetch comments');
};

export default fetchComments;