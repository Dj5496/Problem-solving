// Find equilibrium poin of array

function eqPoint(a,n) {
    let left = 0;
    let right = n-1;
    let left_sum = 0;
    let right_sum = 0;

    while(left < right){
        if(left_sum > right_sum){
            right_sum += a[right]
            right--
            console.log("right_sum", right_sum)
        } else {
            left_sum += a[left]
            left++
            console.log("left_sum", left_sum)
        }
    }
    if(left_sum == right_sum){
        console.log("left", left);
        return left+1
    }
}

const res = eqPoint([1,8,1,3,2,2,2,2,2],9)
console.log(res);