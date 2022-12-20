// Recursion: when function call itself
// otherwise it will get called for infinite time
// If a function call itself then there must be an end point
let counter = 1;
function demo(number) { //function with defination
if(counter>number){
    return
}
console.log("recursion calling", counter);
    counter++
    demo(number) // recursion function
}

demo(10); //calling