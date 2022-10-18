function sortZeroOneTwo(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high){
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
      continue
    }
    if (arr[mid] === 1) {
      mid++;
      continue
    }
    if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
      continue
    }
    break;
  }
  return arr;
}
let arr1 = [0, 1, 2, 0, 1, 2, 0, 2]
let arr2 = [1, 0, 1, 0, 1, 1]
console.time();
let result = sortZeroOneTwo(arr1)
console.log(result);
console.timeEnd();