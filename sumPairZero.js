function getSumPairZero(array) {
for(let number of array){
    for(let j=1;j<array.length;j++){
        if(number+array[j] === 0){
            console.log(number, array[j]);
            return [number,array[j]]
        }
    }
}
}

const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8])
console.log("result", result);