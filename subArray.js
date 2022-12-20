
function subArraySum(arr,n,s){
    let currentSum = arr[0], start = 0, i;
    let res;
    let pas;
    for (i = 1; i <= n; i++) {
        while (currentSum > s && start < i - 1) {
            currentSum = currentSum - arr[start];
            start++;
        }
        if (currentSum == s) {
            let p = i - 1;
            res = start
            pas = p
            return res, pas;
        }
        if (i < n)
            currentSum = currentSum + arr[i];
    }
    return 0;
}

const res = subArraySum([1,2,3,7,5],5,12)
console.log(res);