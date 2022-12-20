// Linear search algoritham
const users = [{username: "dj", emial:"dj@gmail.com"},
{username: "abc", emial:"abc@gmail.com"},
{username: "xyz", emial:"xyz@gmail.com"}] //linear sarch algo

function linearSearch(arr, val) {
    for(item of arr){
        if(item['username'] === val){
            return true
        }
    }
    return false;
}

const result = linearSearch(users, 'dj')
console.log(result);