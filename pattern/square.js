function square(n){
    let str = "";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            str = str+"*"
        }
        str = str+"\n"
    }
    console.log(str);
}

const res = square(8)
console.log(res);