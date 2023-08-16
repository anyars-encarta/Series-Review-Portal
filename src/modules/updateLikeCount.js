// updateCount.js

function updateCount(endpoint, itemId, updatedCount) {
  const countElements = document.querySelectorAll(`.${endpoint}-count[data-item-id="${itemId}"]`);

  countElements.forEach((element) => {
    element.textContent = `${updatedCount}`;
  });
}

export default updateCount;
