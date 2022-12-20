// Find the maximum occuring character in given string.

// function maxChar(str) {
//     let map = {};
//     str.split("").forEach(element => {
//         map[element] = map[element] ? map[element] + 1 : 1;
//     });
//     console.log(map)
//     let max = 1;
//     char = str[0];
//     for (let k in map) {
//         if (map[k] > max) {
//             max = map[k]
//             char = k
//         }
//     }
//     return char;
// }

// const res = maxChar("Hello worldsssss");
// console.log(res);












function maxN(str) {
let obj = {}
str.split("").forEach((event) => {
    obj[event] = obj[event] ? obj[event] + 1 : 1;
});
// console.log(obj)

let max = 0;
let char = str[0];
for (let item in obj) {
        // 1>2
        // 
    if (obj[item]>max) {
        //max = 2
        //max = 1
         max = obj[item]; 
         char = item; 
        } 
}
return max
}

const res = maxN("aahuiiiiiiijjkolwq");
console.log(res);