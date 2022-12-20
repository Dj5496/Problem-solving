// Find the length of largest subarray with 0 sum

function findMaxLength(arr){
    let hashMap = new Map(); // create an empty hasmap
    let sum = 0; // initialize sum of elements
    let max_len = 0;  // initalize result
    for(let i=0; i<=arr.length;i++){
        sum += arr[i];
        if(arr[i]==0 && max_len==0)
            max_len = 1
        if(sum == 0)
            max_len = i+1;
        let prev_i = hashMap.get(sum);
        if(prev_i != null)
        max_len = Math.max(max_len, i-prev_i);
        else
        hashMap.set(sum, i)
    }
    return max_len;

}

const res = findMaxLength([15, -2, 2, -8, 1, 7, 10, 23])
console.log(res);