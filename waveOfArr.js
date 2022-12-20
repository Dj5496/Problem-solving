// Wave Array


function waveArr(arr,n){
    // arr.sort((a,b)=> a > b ? 1 : -1);
    // console.log("sss",arr);
    for(let i=0; i<n-1; i+=2){
        if (i>0 && arr[i-1] > arr[i] )
              [arr[i], arr[i - 1]] = [arr [ i - 1], arr[i]]
        if (i<n-1 && arr[i] < arr[i+1] )
              [arr[i], arr[i + 1]] = [arr [ i + 1], arr[i]]
    }
return arr;

// wave array for even number
// if(n%2 === 0){
//     for(let i=0;i<n/2;i++){

//         let temp=arr[2*i];
    
//         arr[2*i]=arr[2*i+1];
    
//         arr[2*i+1]=temp;
    
        
    
//     }
//  } 
}

const res = waveArr([1,3,20,4,5],5);
console.log(res);