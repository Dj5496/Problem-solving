function zigzagArr(arr,n) {
    let flag = true;
     let temp = 0;; 
    for(let i = 0; i <= arr.length-2; i++)
    {
        if (flag)
        {
            if (arr[i] > arr[i + 1]){
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        else
        {
            if (arr[i] < arr[i + 1]){
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
       }
        flag = !flag;
    }
    return arr;
}

let arr = [ 4, 3, 7, 8, 6, 2, 1 ];
let n = arr.length;
 
// for(let i = 0; i < n; i++)

const res = zigzagArr(arr,n)
console.log(res);