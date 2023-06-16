function findFloor(arr, value) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] === value) {
      return [middleIdx]
    }
    if (arr[middleIdx] > value) {
      rightIdx = middleIdx - 1
    }
    else {
      leftIdx = middleIdx + 1
    }
  }
  return -1
}

module.exports = findFloor;
