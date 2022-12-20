// Longest substring without repeating character
// Input: s= "abcabcbb"
// Output: 3

function lengthOfLongestSubString(s) {
    if(!s){
    return 0
    }

    let start = 0;
    let end = 0;
    let maxLength = 0;

    const uniqueCharacter = new Set();

    while(end< s.length){
        if(!uniqueCharacter.has(s[end])){
            uniqueCharacter.add(s[end])
            end++
            maxLength=Math.max(maxLength,uniqueCharacter.size)
        } else {
            uniqueCharacter.delete(s[start]);
            start++
        }
    }
    return maxLength
}

const res = lengthOfLongestSubString("abcdabcdbb");
console.log(res);