import './style.css';
import fetchLatestShows from './modules/fetchData.js';
import fetchLikes from './modules/fetchLikes.js';
import openCommentPopup from './modules/commentPopup.js';
import addLike from './modules/addLike.js';
import updateCount from './modules/updateLikeCount.js';
import fetchComments from './modules/fetchComments.js';

const createShowElement = async (show) => {
  const likes = await fetchLikes('JPNcHMmt2hzSVQjbTTQW', show.id);
  const showElement = document.createElement('div');
  showElement.className = 'show';
  showElement.innerHTML = `
    <img class="image" src="${show.image.medium}" alt="${show.name}">
    <h3>${show.name}</h3>
    <div class="interaction-icons">
      <div class="like">
        <p class="like-display"><span class="likes-count" data-item-id="${show.id}">${likes}</span></p>
        <i class="fas fa-heart like-button"></i>
      </div>
      
      <div class="comment">
        <p class="comment-display"><span class="comment-count" data-item-id="${show.id}">${likes}</span></p>
        <i class="fas fa-comment comment-button"></i>
      </div>
    </div>
  `;

  // Set initial comment count to 0
  const commentCountSpan = showElement.querySelector('.comment-count');
  commentCountSpan.textContent = 0;

  // Add event Listener to the Comment button
  const commentButton = showElement.querySelector('.comment-button');
  commentButton.addEventListener('click', () => {
    openCommentPopup(show); // Pass the 'show' object to the popup function
  });

  // Add event listener to the like icon
  const likeButton = showElement.querySelector('.like-button');
  likeButton.addEventListener('click', async () => {
    const updatedLikes = await addLike('JPNcHMmt2hzSVQjbTTQW', show.id);
    updateCount('likes', show.id, updatedLikes);
  });

  return showElement;
};

// Displaying shows on the homepage.
const displayLatestShows = async () => {
  const latestItemsContainers = document.querySelectorAll('.movie-list');
  const latestShows = await fetchLatestShows();

  latestItemsContainers.forEach(async (container) => {
    container.innerHTML = '';

    latestShows.forEach(async (show) => {
      const showElement = await createShowElement(show);

      // // Fetch comments for the show to update comment count
      // const comments = await fetchComments('XLs816Sw5Ws6tzau8VMq', show.id);
      // const commentCountSpan = showElement.querySelector('.comment-count');
      // commentCountSpan.textContent = comments.length === 0 ? 0 : comments.length;

      container.appendChild(showElement);
    });
  });
};

// Implementing single page application.
const latestListItem = document.querySelector('.latest');
const seriesListItem = document.querySelector('.series');

const latest = document.getElementById('latest-items');
const series = document.getElementById('series-items');

latestListItem.addEventListener('click', () => {
  latest.style.display = 'flex';
  series.style.display = 'none';
  latestListItem.classList.add('active');
  seriesListItem.classList.remove('active');
});

seriesListItem.addEventListener('click', () => {
  latest.style.display = 'none';
  series.style.display = 'flex';
  seriesListItem.classList.add('active');
  latestListItem.classList.remove('active');
});

// Call the function to display the latest shows when the page loads
window.onload = () => {
  displayLatestShows();

  // Initial state: show the 'latest-items' section, hide the 'series-items' section
  latest.style.display = 'flex';
  series.style.display = 'none';
};
