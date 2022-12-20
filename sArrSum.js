// SubArray with given sum;

function subArray(arr,n,s){
    let result= [];
        let i=0;
        let start=0;
        let total=0;
       while (i<=n-1)
       {
           total+=arr[i];
             if (total==s)
           {
               result.push(start + 1);
               result.push(i + 1);
               return result;
           }
           while (total>s)
           {
               total-=arr[start];
               start+=1;
           }
           if (total==s)
               if (start<=i)
               {
                result.push(start + 1);
               result.push(i + 1);
               return result;
               }
           i+=1;
       }
           result.push(-1);
          return result;

}

const res = subArray([15, 2, 4, 8, 9, 5, 10, 23],8,23)
console.log(res)