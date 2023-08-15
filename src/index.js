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
    <i class="fas fa fa-light fa-comment fa-shake"></i>
    <p>Likes: <span class="likes-count" data-item-id="${show.id}"></span></p>
    <button class="like-button">like</button>
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
