function sortedFrequency(arr, value) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let result = -1;

  //Binary Search Loop
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] === value) {
      result = middleIdx;
      rightIdx = middleIdx - 1;
    }
    //Checking left side of array
    if (arr[middleIdx] > value) {
      rightIdx = middleIdx - 1;
    }
    //Checking right side of array
    if (arr[middleIdx] < value) {
      leftIdx = middleIdx + 1;
    }
  }
  if (result === -1) {
    return -1;
  }

  let lastIdx = result;
  while (lastIdx + 1 < arr.length && arr[lastIdx + 1] === value) {
    lastIdx++;
  }
  let frequency = lastIdx - result + 1;
  return frequency;
}

module.exports = sortedFrequency;
