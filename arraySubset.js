// Array subset of another array.

function subset(arr1,arr2,n,m) {
    a1 = arr1.sort((a,b) => a-b)
    a2 = arr2.sort((a,b) => a-b)
    for (let i=0; i<a2.length; i++) {
        if (a1.includes(a2[i])) {
            a1.splice(a1.indexOf(a2[i]), 0)
            console.log(a1.splice(a1.indexOf(a2[i]), 0))
        } else {
            return 'No'
        }
    }
    return 'Yes'
}

const res = subset([11, 1, 13, 21, 3, 7],[11, 3, 7, 1],6,4)
console.log(res)