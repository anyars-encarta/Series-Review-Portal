let currentPopup = null;

const openCommentPopup = async (show) => {
  if (currentPopup) {
    currentPopup.remove();
  }

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
    currentPopup = null;
  });

  document.body.appendChild(popup);
  currentPopup = popup;

  // Close popup when clicking outside the form
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.remove();
      currentPopup = null;
    }
  });
};

export default openCommentPopup;