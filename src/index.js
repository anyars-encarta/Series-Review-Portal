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
