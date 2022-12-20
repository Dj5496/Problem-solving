function rightTringle(n){
    let str = "";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i;j++){
            str += " "
        }
        for(let k=0;k<i;k++){
            str += "*"
        }
    str += "\n"
    }
    console.log(str);
}

rightTringle(8);