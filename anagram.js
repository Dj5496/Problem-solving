function isAnagram(string1, string2){
    if(string1.length!=string2.length){
        return false;
    }
    let counter = {};
    for(let letter of string1){
        // console.log("letter",letter)
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter]);
    }
    console.log(counter);
    for(let item of string2){
        if(!counter[item]){
            return false;
        } 
            // console.log("dasdas", counter[item] -= 1)
    }
    return true;
}

const check = isAnagram("hello","llhoe");
console.log(check);