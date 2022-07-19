function PairOfGivenDifference(arr, diff) {
  let uniqueArr = new Set(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let givenDiff = diff + arr[i];
    if (uniqueArr.has(givenDiff)) {
      return 1;
    }
  }
  return 0;
}
console.time();
console.log(PairOfGivenDifference([9, 10, 5, 80, 30, 19], 70));
console.log(PairOfGivenDifference([-10, 20], 20));
console.timeEnd();