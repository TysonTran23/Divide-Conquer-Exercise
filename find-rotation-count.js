function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2) 
    if (arr[middleIdx] > arr[rightIdx]) {
        leftIdx = middleIdx + 1
    }
    else {
      rightIdx = middleIdx
    }
  }
  return leftIdx
}

module.exports = findRotationCount;
