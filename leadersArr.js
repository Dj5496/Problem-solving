function leadersOfArr(arr,n){
//    max_from_right
// let i=0;
// let j=i+1;
let maxLength=0;
let val = [];
// let val=;
      // for( i=0; i<n; i++){
      //   for( j=i+1; j<n; j++){
      //     if(arr[i]<arr[j]){
      //       break;
      //     }
      //   }
      //   if(j==n){
      //     val.push(arr[i]);
      //   }
      // }
      // return val;
for(let i=n-1;i>=0;i--){
  if(arr[i]>maxLength){
    maxLength=arr[i];
    val.push(maxLength)
  }
}
return val;


// while(i<n){
      //   console.log("i",arr[i])
      //   console.log("j",arr[j])
      //   if(arr[i]<arr[j]){
      //     // val.push(arr[i]);
      //     console.log("val1",arr[i]); 
        
      //   }
      //   if(i==n){
      //     console.log("arr",arr[i]); 
      //     val.push(arr[i]);
      //     console.log("val2",val);
      //   }
      //   i++;
      //   j++
      // }
      // return val;
}

const res = leadersOfArr([16,17,4,3,5,2],6)
console.log(res);