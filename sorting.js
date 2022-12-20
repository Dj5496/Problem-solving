// Sorting using recursion function
// [2,4,3,5,1] - by default case
// [2,3,4,5,1] -case 1
// [2,3,1,5,4] -case 2
// [2,1,3,5,4] -case 3
// [1,2,3,4,5] -final output
let myArray = [2,4,3,5,1]
let myArrayList = [];
let i = 0;
let j = 1;
function isSorted(array){
    for(let i=0; i<array.length; i++){
        if(array[i]>array[i+1]){
            return false; 
        }
    }
    return true;
}

function sortCheck(array){
    if(isSorted(array)){
        myArrayList = array;
        return;
    }else if(array[i] < array[j]){
        i++;
        j++;
        sortCheck(array);
    } else {
        [array[i],array[j]]=[array[j],array[i]]
        i=0;
        j=1;
        sortCheck(array);
    }
}

sortCheck(myArray);
console.log(myArrayList);