// [1,2,3,4,5,6,7,8,9,10] helper recursive function
// [1,3,5,7,9] - output

function findOdd(array){
let oddArray= [];
    function helperRecursive(inputArray){
        if(inputArray.length === 0){
            return;
        }
        if(inputArray[0]%2 !== 0){
            oddArray.push(inputArray[0])
        }
        helperRecursive(inputArray.slice(1))
    }
    helperRecursive(array) // 1st time calling
    return oddArray;
}

const res = findOdd([1,2,3,4,5,6,7,8,9,10]);
console.log(res);