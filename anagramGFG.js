// Anagram

function anagram(a1,b1){
    
    let str1 = a1.split('').sort().join('');
    let str2 = b1.split('').sort().join('');
    return str1 === str2 ? 'Yes' : 'No';
}

const res = anagram("geeksforgeeks","forgeeksgeeks")
console.log(res);