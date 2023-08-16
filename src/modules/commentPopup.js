// import fetchComments from './fetchComments.js';
import addComment from './addComment.js';
// import updateCommentCount from './commentCount.js';

const uniqueID = 'XLs816Sw5Ws6tzau8VMq';

let currentPopup = null;

const openCommentPopup = async (show) => {
  if (currentPopup) {
    return;
  }

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  const popup = document.createElement('div');
  popup.className = 'comment-popup';
  popup.innerHTML = `
  
    <i class="fa-solid fa-square-xmark close-button"></i>

    <div class="detail-view">
      <img class="image" src="${show.image.medium}" alt="${show.name}">
      <div class="image-side">
        <h3>${show.name}</h3>
        <span>${show.summary}</span>
      </div>
    </div>

  <p id="comment-count">Comments (0)</p>
  <div id="comment-display">
    <ul id="comment-items"></ul>
  </div>

  <form class="comment-area">
    <input type="text" name="name" id="full-name" placeholder="Your Name" maxlength="30" required>
    <textarea name="comment" id="comment" rows="5" placeholder="Write your comment here" maxlength="500" required></textarea>
    <button id="commit-button" type="submit">Comment</button>
  </form>
`;

  const closeButton = popup.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    popup.remove();
    overlay.remove();
    currentPopup = null;
  });

  document.body.appendChild(popup);
  currentPopup = popup;

  const form = popup.querySelector('.comment-area');
  const commentList = popup.querySelector('#comment-items');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameInput = form.querySelector('#full-name');
    const commentInput = form.querySelector('#comment');

    const name = nameInput.value;
    const comment = commentInput.value;

    if (name && comment) {
      const listItem = document.createElement('li');

      const commentDate = new Date().toLocaleDateString();

      listItem.textContent = `${commentDate} ${name}: ${comment}`;
      commentList.appendChild(listItem);

      nameInput.value = '';
      commentInput.value = '';

      try {
        await addComment(uniqueID, show.id, name, comment);
      } catch (error) {
        throw new Error(error);
      }
    }
  });

  // try {
  //   const comments = await fetchComments(uniqueID, show.id);

  //   updateCommentCount(uniqueID, show.id);

  //   const commentList = popup.querySelector('#comment-items');
  //   commentList.innerHTML = '';

  //   comments.forEach((comment) => {
  //     const listItem = document.createElement('li');

  //     listItem.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
  //     commentList.appendChild(listItem);
  //   });
  // } catch (error) {
  //   throw new Error(error);
  // }
};

export default openCommentPopup;
