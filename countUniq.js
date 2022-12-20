function countUnique(array){
if(array.length>0){
    let i=0;
    for(let j=1;j<array.length;j++){
        if(array[i]!=array[j]){
            i++
            array[i]=array[j]
        }
    }
    return array[i+1]
}
}


const result = countUnique([1,1,1,2,2,3,3,4,4,4,4,5,6,7,8,9,9,10,10])
console.log(result);