// Insertion Sorting

function sorting(arr){
    for(let i=1;i<arr.length;i++){
        let curr=arr[i] // 2
        let j=i-1       // 1
              //1>=0     
        while(j>=0 && arr[j]>curr){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=curr;
    }
    return arr;
}

const res = sorting([2,4,3,1,5,6,8,7]);
console.log(res);