import updateCommentCount from '../modules/commentCount.js';
import fetchComments from '../modules/fetchComments.js';

// Mock the fetchComments function
jest.mock('../modules/fetchComments', () => jest.fn());

describe('updateCommentCount', () => {
  beforeEach(() => {
    // Clear the mock implementation and mockReturnValue of fetchComments before each test
    fetchComments.mockClear();
    fetchComments.mockReturnValue([]);
  });

  it('should update the comment count element with the correct count', async () => {
    // Mock the comment count element
    document.body.innerHTML = '<div id="comment-count"></div>';

    // Call the updateCommentCount function with mock appId and itemId
    await updateCommentCount('mockAppId', 'mockItemId');

    // Check if fetchComments is called with the correct parameters
    expect(fetchComments).toHaveBeenCalledWith('mockAppId', 'mockItemId');

    // Check if the comment count element is updated with the correct count
    expect(document.getElementById('comment-count').textContent).toBe('Comments(0)');
  });

  it('should display zero if no comment is found for an item', async () => {
    // Mock the comment count element
    document.body.innerHTML = '<div id="comment-count"></div>';

    // Mock the fetchComments function to return an empty array
    fetchComments.mockResolvedValue([]);

    // Call the updateCommentCount function with mock appId and itemId
    await updateCommentCount('mockAppId', 'mockItemId');

    // Check if fetchComments is called with the correct parameters
    expect(fetchComments).toHaveBeenCalledWith('mockAppId', 'mockItemId');

    // Check if the comment count element is updated with the correct count
    expect(document.getElementById('comment-count').textContent).toBe('Comments(0)');
  });

  it('should throw an error if fetchComments fails', async () => {
    // Mock the fetchComments function to throw an error
    fetchComments.mockRejectedValue(new Error('Fetch comments failed'));

    // Call the updateCommentCount function with mock appId and itemId
    await expect(updateCommentCount('mockAppId', 'mockItemId')).rejects.toThrow('Fetch comments failed');
  });
});