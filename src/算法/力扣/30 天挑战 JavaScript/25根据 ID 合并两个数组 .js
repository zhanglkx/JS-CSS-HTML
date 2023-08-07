/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function(arr1, arr2) {
  arr1 = arr1.concat(arr2);
  const map = new Map();
  arr1.forEach(item => {
    if (map.has(item.id)) {
      map.set(item.id, Object.assign(map.get(item.id), item));
    } else {
      map.set(item.id, item);
    }
  });
  return [...map.values()].sort(((a, b) => a.id - b.id));
};

