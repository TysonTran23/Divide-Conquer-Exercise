function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  //Keep searching/splitting till we found either the value or no value
  while (leftIdx <= rightIdx) {
    //Find the middle idx by using the updating left/right idx and averaging them
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    //if middle index is === 1, means we have not found the transition point, move the left index up to the middle idx
    if (arr[middleIdx] === 1) {
      leftIdx = middleIdx + 1;
    }
    //If middle index is === 0
    else if (arr[middleIdx] === 0) {
      //Check if to the left of the middle idx is a 0, if so move right idx to middle idx - 1
      if (arr[middleIdx - 1] === 0) {
        rightIdx = middleIdx - 1;
      }
      //If left of the middle idx is a 1, this is the transition point
      else if (arr[middleIdx - 1] === 1) {
        return arr.length - middleIdx;
      } else if (arr[middleIdx - 1] === undefined) {
        return arr.length - middleIdx;
      }
    }
  }
  return 0;
}
module.exports = countZeroes;
