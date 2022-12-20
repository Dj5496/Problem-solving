// Selection Sorting Algoritham

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
          }
          if(i !== min){
            temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    return arr;
}

const result = selectionSort([2,4,3,1,5,6,8,7]);
console.log(result);
