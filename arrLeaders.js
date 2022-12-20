// Leaders in an array

function leaders(arr,n) {
    let max = arr[n-1];
    let final = [arr[n-1]];
    let i = n-2
    while (i>=0){
        if(arr[i]>=max){
            max = arr[i];
            final.push(arr[i])
        }
        i--;
    }
    return final.reverse();
}

const res = leaders([16,17,4,3,5,2],6)
console.log(res);