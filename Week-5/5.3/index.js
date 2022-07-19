const hasDuplicate = (arr) => {
 let ar=arr.length;
 console.log(ar);
 let se = new Set(arr).size;
console.log(se)
return ar!=se }
console.log(hasDuplicate([2,4,6,7,8,4,3,8]))
console.log(hasDuplicate([10,13,4,8,14]))
console.log(hasDuplicate(['pranjali','pranjali']))
