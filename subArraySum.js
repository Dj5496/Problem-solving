//Function to find a continuous sub-array which adds up to a given number.
function subarraySum(arr, n, s){
    let ptr1=0;
    let ptr2=0;
    let sum=arr[0];
    // if(sum==s){
    //     return -1
    // }    

    while(ptr2 < n-1){
        if(sum+arr[ptr2+1]==s){
            sum += arr[ptr2+1]
            ptr2++;
        } else {
            sum -= arr[ptr1];
            ptr1++
        }
    }
    
    // if(sum==s){
        // return ptr1+1;
    // }
}

const res = subarraySum([1,2,3,7,5],5,12)
console.log(res);