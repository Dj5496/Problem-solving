function upperC(str) {
    const sntnce = str.split(" ")
    for(let i=0; i<sntnce.length; i++){
        sntnce[i]=sntnce[i][0].toUpperCase() + sntnce[i].substring(1);
        console.log(sntnce[i].substring(1));
    }
    // console.log(sntnce.join(""))
}

const res = upperC("my name is dhanraj");