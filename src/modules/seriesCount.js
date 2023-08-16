// Function to count the number of items
export function countItems(items) {
  return items.length;
}

// Function to update the count on the screen
export function updateItemCount(count) {
  const itemCountElement = document.getElementById('item-count');
  itemCountElement.textContent = `Series: ${count}`;
}
