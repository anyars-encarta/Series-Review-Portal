import './style.css';

// Fetching data from tv maze API.
async function fetchLatestShows() {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
}

// Creating Show elements to display in the screen.
async function createShowElement(show) {
  const showElement = document.createElement('div');
  showElement.className = 'show';
  showElement.innerHTML = `
    <img class="image" src="${show.image.medium}" alt="${show.name}">
    <h3>${show.name}</h3>
    <div class="interaction-icons">
      <i class="fas fa-heart like-button"></i>
      <i class="fas fa-comment"></i>
    </div>
    <p>Likes: <span class="likes-count" data-item-id="${show.id}"></span></p>
  `;

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
