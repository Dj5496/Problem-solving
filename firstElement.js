// FInd the first element occurs at least K number of times.

function firstEle(arr,k){
    let count={};
    let res = -1;
    for(let item of arr){
        console.log(count[item])
        if(!count[item]){
            console.log("pppp",count[item])
            count[item]=1;
        } else {
            count[item]++
        }
        if(count[item]===k){
            res = item;
            break;
        }
    }
    return res;

    // console.log(count)
}

const res = firstEle([1, 7, 4, 3, 4, 8, 7],2)
console.log(res);