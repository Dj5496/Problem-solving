//

function firstElementKTime(arr,n,k){
    //code here
    let count_map = new Map();
    for (i = 0; i < n; i++) {
        if (count_map.has(arr[i])) {

            count_map.set(arr[i], count_map.get(arr[i]) + 1);
        } else
            count_map.set(arr[i], 1);
    }

    for (i = 0; i < n; i++) {
        if (count_map.has(arr[i])) {
            if (count_map.get(arr[i]) == k)
                return arr[i];
        }
    }
    return -1;
}

const res = firstElementKTime([1, 4, 7, 3, 4, 8, 7],7,2);
console.log(res);