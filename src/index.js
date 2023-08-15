import './style.css';
import fetchLatestShows from './modules/fetchData.js';
import openCommentPopup from './modules/commentPopup.js'; // Import the function from the separate file

// Creating Show elements to display in the screen.
async function createShowElement(show) {
  const showElement = document.createElement('div');
  showElement.className = 'show';
  showElement.innerHTML = `
    <img class="image" src="${show.image.medium}" alt="${show.name}">
    <h3>${show.name}</h3>
    <div class="interaction-icons">
      <i class="fas fa-heart like-button"></i>
      <i class="fas fa-comment comment-button"></i> <!-- Added class for the comment button -->
    </div>
    <p>Likes: <span class="likes-count" data-item-id="${show.id}"></span></p>
  `;

  // Add event Listener to the Comment button
  const commentButton = showElement.querySelector('.comment-button');
  commentButton.addEventListener('click', () => {
    openCommentPopup(show); // Pass the 'show' object to the popup function
  });

  return showElement;
}

// Displaying shows on the homepage.
async function displayLatestShows() {
  const latestItemsContainers = document.querySelectorAll('.movie-list');
  const latestShows = await fetchLatestShows();

  latestItemsContainers.forEach(async (container) => {
    container.innerHTML = '';

    latestShows.forEach(async (show) => {
      const showElement = await createShowElement(show);
      container.appendChild(showElement);
    });
  });
}

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
