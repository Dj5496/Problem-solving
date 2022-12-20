// function arrOfArr(arr){
//     // arr.map((ele1) => {
//     //     console.log(ele1);
//     // });
//     let newArr = arr.flat(Infinity);
//     let result = [];
//     //for(let i=0; i<newArr.length; i++){
//         // result.push(newArr[i-1])
//         console.log("i",newArr[i]);
//         // for(let j=1; j<arr[i].length; j++){
//         //     result.push(arr[i][j-1])
//         //     // console.log("j",arr[i][j-1]);
//         //     for(let k=1; k<arr[i][j].length; k++){
//         //         result.push(arr[i][j][k-1])
//         //         // console.log("k",arr[i][j][k-1]);
//         //         for(let l=0; l<arr[i][j][k].length; l++){
//         //             result.push(arr[l])
//         //             // result.push(arr[i-1],arr[j-1],arr[k-1],arr[l])
//         //             // console.log("res",result)
//         //             // console.log("l",arr[l]);
//         //         }
//         //     }
//         // }
//     //}
//     for(let s=0; s<result.length; s++){
//         let sum = arr[s]+arr[s+1];
//         console.log(sum); 
//     }
//     return result
// }

// const res = arrOfArr([1,2,3,[2,3,[1,2,3,5,4,[1,2,3]]]])
// console.log(res);

const ar = [1, 2, 3, [2, 3, [1, 2, 3, 5, 4, [1, 2, 3]]]]

let count = 0;
let newAr = []

const sum = (ar) => {
    for (let i = 0; i < ar.length; i++) {
        if(typeof(ar[i]) === "object"){
            sum(ar[i])
        }
        else
        {
        count = count + ar[i]
        newAr.push(ar[i])
        }
    }
    return newAr;


}

const aa =  sum(ar)
console.log(aa,"---------------")

console.log("---typeo f", typeof({}))