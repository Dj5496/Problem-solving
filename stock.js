// Stock buy and sell and return 1 if we gain profit

function stock(A,n){
    let pairList = [];
    let min = 0;
    let max = 0;
    let gain = false;       
    for(let i=1; i<n; i++) {
        if(A[i-1] >= A[i]) {
            if(gain) {
                pairList.push([min, max])
                gain = false;
            }
            min = i;
            max = i;
        }
        else if(A[i-1] <= A[i]) {
            max = i;
            gain = true;
            if(i==n-1 && gain) {
                pairList.push([min, max])
            }
        }
    }
    return pairList;
}

const res = stock([100,180,260,310,40,535,695],7)
console.log(res);