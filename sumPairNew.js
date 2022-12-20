function getSumPairZeroNew(array){
    let left = 0;
    let right = array.length-1;

    while(left < right){
        let sum = array[left]+array[right];
        if(sum===0){
          return [array[right],array[left]]
        }else if(sum>0){
            right--
        } else {
            left++
        } 
 
    }
}
const result = getSumPairZeroNew([-5,-4,-3,-2,0,2,4,6,8])
console.log("result", result);