// Uncommon characters

function uncommon(A,B){
let str1 = A.split('')
let str2 = B.split('')

let res = [];
let uniq = [];
for(let i=0;i<A.length;i++){
   if((str2.includes(str1[i]) === false)){
    res.push(str1[i])
   }
}
for(let i=0;i<B.length;i++){
  if((str1.includes(str2[i]) === false)){
   res.push(str2[i])
  }
}
res.sort()
if(res.length == 0){
  return -1
}
for(let i = 0; i < res.length; i++){
  if(uniq.includes(res[i]) === false){
    uniq += res[i]
  }
}
return uniq;

}

const res = uncommon("characters","alphabets")
console.log(res)
// fioqruz