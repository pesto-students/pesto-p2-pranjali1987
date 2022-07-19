function maxSubarraySum(arr) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (max < sum) {
      max = sum;
    }
    if (sum < 0) 
    sum = 0;
  }
  return max;
}

console.log(maxSubarraySum([5,-4,-2,6,-1]));
console.log(maxSubarraySum([1, 2, 3, -2, 5]));
console.log(maxSubarraySum([-2,-3, 4, -1, -2, 1, 5, -3]));
console.time();
console.timeEnd();
