// Devide & Conquerer Technique
// find the index of given no in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> 6 -output

// min=0;
// max=array.length-1;
// midIndex=(min+max)/2 => (0+14)/2 = 7, element=8
// if array[midIndex] < num(7)
// min = midIndex + 1
// if array[midIndex] > num(7)
// max = miDIndex - 1, max = 7-1 = 6 {1,2,3,4,5,6,7}
// midIndex= (0+6)/2 = 3;
// min = 3+1 = 4(min), max=6 {5,6,7}
// midIndex = (4+6)/2 = 5
// min = 5+1 = 6(min), max=6;
// midIndex = (6+6)/2 = 6;
//  7 == 7 else return midIndex => 6 element=7;

function getBinaryNum(array,num) {
  let min=0;
  let max=array.length-1;
  while(min <= max){
    let midIndex=Math.floor((min+max) / 2)
    console.log("midIndex"+midIndex+"min"+min+"max"+max);
    if(array[midIndex] < num){
        min= midIndex+1;
    }else if(array[midIndex] > num){
        max = midIndex-1;
    }else {
        return midIndex;
    }
  }
  return -1
}

const result = getBinaryNum([1 ,2 ,3 ,4 ,5], 4)
console.log(result);

// time complexity binary o(log(n))