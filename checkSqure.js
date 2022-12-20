// checking saquare in another array
// array1 = [1,2,3,4] array2=[1,9,4,16]
// arraySquare = array1[i] * array1[i]
// if(arraySquare === array2[j])
// isSquare = true;

// function checkSquare(array1,array2) {
//     for(let i=0;i<array1.length;i++){
//         let isSquare =false;
//         for(let j=0;j<array2.length;j++){
//             if(array1[i] * array1[i] === array2[j]){
//                 isSquare = true
//             } 
//             if(j === array2.length-1){
//                 if(!isSquare){
//                     return false
//                 }
//             }
//         }
//     }
//     return true
// }

// const result = checkSquare([1,2,3,4],[1,9,4,22])
// console.log(result);

// time complexity O(n^2) quadretic
// array1=[1,2,4,2], array2=[1,4,4,16]
//case 2
// map1: {1:1,2:2,4:1}, map2: {1:1,4:2,16:1}

function checkSquareLinear(array1,array2){
    let map1={};
    let map2={};
    for(let item of array1){   //n times
        map1[item]=(map1[item] || 0) + 1
    }
    for(let item2 of array2){   //n times
        map2[item2]=(map2[item2] || 0) + 1
    }
    for(let key in map1){    //n times
        if(!map2[key*key]){  //obj keys compare in term of square
            return false
        }
        if(map1[key] !== map2[key*key] ){  //value compare
            return false
        }
    }
    return true
}

const result2 = checkSquareLinear([1,2,4,2],[1,4,4,16])
console.log(result2)
// time complexity is O(n) linear