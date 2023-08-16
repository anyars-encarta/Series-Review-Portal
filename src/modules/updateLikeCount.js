// updateCount.js

function updateCount(endpoint, itemId, updatedCount) {
  const countElements = document.querySelectorAll(`.${endpoint}-count[data-item-id="${itemId}"]`);

  countElements.forEach((element) => {
    element.textContent = `${endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}: ${updatedCount}`;
  });
}

export default updateCount;
