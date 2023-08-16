import fetchComments from './fetchComments.js';

const updateCommentCount = async (appId, itemId) => {
  try {
    const comments = await fetchComments(appId, itemId);
    const commentCountElement = document.getElementById('comment-count');

    if (commentCountElement) {
      commentCountElement.textContent = `Comments: ${comments.length}`;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCommentCount;
