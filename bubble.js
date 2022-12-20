// Bubble sort (Sorting..)
// A sorting algoritham where the largest values bubble up at the top

function bubbleSort(arr){
    //       length i=7; 7>0; 6 
    for(let i=arr.length;i>0;i--){
        //            0<7; 0++
        for(let j=0;j<i-1;j++){
            //     arr[0]>arr[0+1]
            //        2>4
            //        4>3
            if(arr[j]>arr[j+1]){
            //        4,3=3,4 swaping
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}
//                         2>4
const result = bubbleSort([2,4,3,1,5,6,8,7])
console.log(result)