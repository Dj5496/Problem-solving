//Bitonic point

function findMaximum(arr,n)
    {
        //your code here
        for(let i=0; i<n-1; i++){
            if((arr[i]<arr[i+1]) == 0){
                return arr[i];
            }
        }
        return arr[n-1]
    }

const res = findMaximum([1,15,25,45,42,21,17,12,11],9)
console.log(res);