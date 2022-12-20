// Find missing number in array

function missingNumber(arr,n){
    // let i = 0;
    // // 0<7
    // while (i < n) {
    //     let correctpos = arr[i] - 1; //1-1 = 0, 2-1=1
    //     //      1<7 && 1!= 1
    //     //      4<7 && 4 != 2
    //     //    1, 2, 4, 6, 3, 7, 8
    //     if (arr[i] < n && arr[i] != arr[correctpos]) {
    //         let temp = arr[i]; //4
    //          arr[i] = arr[correctpos]; // 2
    //          arr[correctpos] = temp; // 4
    //         //  console.log(arr[i]);
    //         }
    //     else {
    //         i++;
    //     }
    //     console.log("arr",arr)
    // }
    // 1,2,3,4,7,6,8
    arr.sort()
    for (let index = 0; index < arr.length; index++) {
            //  1 != 0+1
            //  2 != 1+1
            //  3 != 2+1
            //  4 != 3+1
            //  7 != 4+1
        if (arr[index] != index + 1) {
            console.log("index", index+1);
            return index + 1;
        }
    }
    return n;
}

const res = missingNumber([1, 4, 3, 5],4);
console.log(res);