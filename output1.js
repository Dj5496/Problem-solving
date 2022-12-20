// function fruit(){
// console.log(name);
// console.log(price);
// var name = 'apple';
// let price = 20;

// output is ?
// name - undefined
// price - refranceError
// }

// 2
// var - Global Scop variable
// for(var i=0;i<3;i++){
//     setTimeout(() => console.log(i), 1);
// }
// output 3,3,3

// 3
// let - Block Scop Variable
// for(let i=0;i<3;i++){
//     setTimeout(() => console.log(i), 1);
// }
// output 1,2,3

// 4
// using + before any boolean or string it will be number
// console.warn(+true);
// console.warn(typeof(+true))

// 5
// console.warn(!"DJ"); opposite value of string is always false
// console.warn(typeof("DJ"))

// 6
// let data = "size";
// let bird = {
//     size: "small"
// }
// console.log(bird[data]);  output- small
// console.log(bird.size);   output- small
// console.log(bird["size"]);output- small 
// console.log(bird.data);   output- undefined

// 7
// let c = {name: "peter"};
// let d;
// d=c
// c.name = "anil"
// console.log(d.name); output-anil 

// 8
// var x;
// var x=10;
// console.log(x) output- 10

// 9
// var x;
// let x=10;
// console.log(x) output - syntexError x has already defined;

// 10
// let a=3
// let b= new Number(3) with the keyword new it will be object
// console.log(a==b) output - true
// console.log(a===b) output - false

// 11
// Function to reverse every sub-array group of size k.
function reverseSub(arr, k, n) {
    // 0  0<5  i=0+3
    // 3  3<5  i=3+3
    // 6  6<5  false 
    for(let i=0; i<n; i+=k){
        console.log("left",i);
        let left = i
        //                   0+3-1, 5-1   2, 4
        //                   3+3-1, 5-1   5, 4 
        let right = Math.min(i + k - 1, n - 1)
        console.log("right", right);
        let temp;
        //    0<2
        //    3<4
        while(left<right){
        // 
         temp=arr[left];
         arr[left]=arr[right]
         arr[right]=temp;

         left++;
         right--;
        }
    }
    return arr
}
const res = reverseSub([1,2,3,4,5],3,5)
console.log(res);
