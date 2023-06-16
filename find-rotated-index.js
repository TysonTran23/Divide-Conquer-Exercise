function findRotatedIndex(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    //If true, return mid as the index where num is found
    if (arr[middleIdx] === num) {
      return middleIdx;
    }
    //If true the left half of the array from leftIdx to middleIdx is sorted
    if (arr[leftIdx] <= arr[middleIdx]) {
      //if true number is on the left side of the array
      if (num >= arr[leftIdx] && num < arr[middleIdx]) {
        rightIdx = middleIdx - 1;
      }
      //if True, number is on the right sode of the array
      else {
        leftIdx = middleIdx + 1;
      }
    }
    //If True, the right half of the array from middleIdx to rightIdx is sorted
    else {
      //If true number is on the right side of the array
      if (num >= arr[middleIdx] && num <= arr[rightIdx]) {
        leftIdx = middleIdx + 1;
      }
      //If true number is on the left side of the array
      else {
        rightIdx = middleIdx - 1;
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
