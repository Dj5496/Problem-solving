// Find first repeated character

function repChar(str){
    let obj = {}
    // str.split('').forEach((event) => {
    //     // obj[event] = obj[event] ? obj[event] + 1 : 1;
    //     if(obj > obj+1){
    //         console.log(event);
    //     }
    // });
    for(let i=0; i<=str.length; i++){
        console.log(obj[str[i]])
       if(obj[str[i]]){
        return str[i]
       } else {
        obj[str[i]]=1;
       }
    }
    // console.log(obj)
}

const res = repChar("geeksforgeeks");
console.log(res);