function oppLftTringle(n){
    let str = "";
    for(let row=0;row<=n;row++){
        for(let clm=0;clm<=n-row;clm++){
            str += "*"
        }
        str += " "
        str += "\n"
    }
    console.log(str);
}

oppLftTringle(8);