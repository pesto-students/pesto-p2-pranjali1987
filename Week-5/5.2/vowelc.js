function isVowel(char){
const vowelSet=new Set (['a','e','i','o','u']);
return vowelSet.has(char);
}
  function vowelCount(strInput){
    let vowelMap = new Map();
    for (let char of strInput){
        var lochChar = char.toLowerCase();
        if (isVowel(lochChar)){
            if (vowelMap.has(lochChar)){
                vowelMap.set(lochChar, vowelMap.get(lochChar)+1);
            } else {
                vowelMap.set(lochChar, 1);
            }
        }
    }
    return vowelMap;
}
console.log(vowelCount("I am Software Developer")); 
