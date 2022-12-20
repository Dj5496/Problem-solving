// How do you check if a given string is a Palindrome

// case - 1

// function isPal(str){
//     const reverse = str.split("").reverse().join("");

//     return reverse.toLowerCase() === str.toLowerCase();
// }

// const res = isPal("level")
// console.log(res);

// case 2

function isPalCus(str){
    const newStr = str.toLowerCase();

    let left=0;
    let right=newStr.length - 1

    while(left<right){
        if(newStr[left] !== newStr[right]) 
        return false;
        left++;
        right--;
    }
    return true;
}

const res2 = isPalCus("dad1");
console.log(res2);