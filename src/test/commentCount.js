import fetchComments from '../modules/fetchComments.js'; // Make sure to import the necessary functions

const updateCommentCount = async (appId, itemId) => {
  try {
    const comments = await fetchComments(appId, itemId);
    const commentCountElement = document.getElementById('comment-count'); // Get the comment count element

    if (commentCountElement) {
      commentCountElement.textContent = `Comments(${comments.length})`;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCommentCount;
