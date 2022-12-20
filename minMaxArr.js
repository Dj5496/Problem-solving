// Find minimum and maximum element of array

function minMax(arr,n){
    let min = arr[0];
    for(let i=0;i<n;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    let max = 0;
    for(let i=0;i<n;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return {min, max}
}

const res = minMax([3, 2, 1, 56, 10000, 167],6)
console.log(res);