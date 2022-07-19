function nextGreaterElement(numsArr){
  let NGE = [], len = numsArr.length;
  for(let i=0; i<len; ++i){
    if(i===len-1){
      NGE.push(-1);
      break;
    }
    let j = i+1;
    while(j<len){
      if(numsArr[j]>numsArr[i]){
        NGE.push(numsArr[j]);
        break;
      } else {
        j++;
      }
    }
    if(j===len-1){
      NGE.push(-1);
    }
  }
  return NGE;
}

let arr1 = [1,3,2,4];
let arr2 = [3,6,8,0,1];
let result = nextGreaterElement(arr2);
console.log(result);