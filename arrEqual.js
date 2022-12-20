// Function to check if two arrays are equal or not.
function check(arr1,arr2){
    // code here
    let N = arr1.length;
    let M = arr2.length;
    // if(N != M){
        arr1.sort();
        arr2.sort();
        for(let i=0;i<N;i++){
            if(arr1[i] != arr2[i]){
                return false        
            }
        }
        return true
    // }
}

const res = check([1,2,5,4,0],[2,4,5,0,1])
console.log(res);