// Function to count the number of items
function countItems(items) {
  return items.length;
}

// Function to update the count on the screen
function updateItemCount(count) {
  const itemCountElement = document.getElementById('item-count');
  itemCountElement.textContent = `Series: ${count}`;
}

export { countItems, updateItemCount };
