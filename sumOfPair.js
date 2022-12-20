// Find all pair given with sum.
// time complexity is O(N)Square.
// function findPair(a,b,x){
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<b.length;j++){
//             if(a[i]+b[j]==x){
//                 console.log(a[i],b[j]);
//             }
//         }
//     }

// }

// const res = findPair([1, 2, 4, 5, 7],[5, 6, 3, 4, 8],9)

// time complexity is O(NLog(N))

function findPair(A,B,X){
let result = [];
    A.forEach((ele1) => {
        B.map((ele2) => {
            if(ele1+ele2==X){
                result.push([ele1, ele2])
            }
        }) 
    });
    // result.sort((a,b)=> a[0]-b[0])
    return result;
}

const res = findPair([1, 2, 4, 5, 7],[5, 6, 3, 4, 8],9)
console.log(res);