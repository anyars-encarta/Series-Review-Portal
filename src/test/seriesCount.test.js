// seriesCount.test.js

import { countItems, updateItemCount } from '../modules/seriesCount.js';

describe('countItems function', () => {
  it('should return the correct count of series', () => {
    const items = [1, 2, 3, 4, 5];
    const count = countItems(items);
    expect(count).toBe(5);
  });

  it('should return 0 for an empty items array', () => {
    const items = [];
    const count = countItems(items);
    expect(count).toBe(0);
  });
});

describe('updateItemCount function', () => {
  it('should update the series count element with the provided count', () => {
    document.body.innerHTML = '<div id="item-count"></div>';
    updateItemCount(10);
    const itemCountElement = document.getElementById('item-count');
    expect(itemCountElement.textContent).toBe('Series: 10');
  });
});
