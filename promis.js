// let usePromise = new Promise(function(resolve,reject){
//     let x = 'dhanraj';
//     let y = 'dhanra';

//     if(x===y){
//         resolve();
//     } else {
//         reject();
//     }
// })

// usePromise.then(function(){
//     console.log("success");
// }).catch(function(){
//     console.log("fail")
// })


function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => {
        let x = "dj";
        let y = "dj";
        if(x===y){
            resolve("hello");
        } else {
            reject("fail");
        }
    });
    // first_promise.then(function(){
    //     console.log("hello");
    // }).catch(function(){
    //     console.log("fail");
    // })
    let second_promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(" GeeksforGeeks..");
      }, 2000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
  }
   
  async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
  }
   
  display();