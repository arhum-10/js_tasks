console.log("Function start");// Function starts 
// callback function
function rannn(n){
  let arr=[];
  for(let i=0;i<n;i++)
   arr[i] =Math.floor(Math.random()*100+1);
  return arr
}
//function to generate numbers
function ran_num(n,callback){
  let arr=callback(n);
  return arr;

}
//function to create average of rndom numbers
let GeneratedNumbers = ran_num(2,rannn)
console.log("Random numbers are " +GeneratedNumbers);
function avg(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum/arr.length;
}
let y=avg(GeneratedNumbers)
console.log("Average of random numbers "+avg(GeneratedNumbers))


let promise1 = new Promise(function(resolve, reject) {
  let timerId = setInterval(() => console.log(), Math.random() * 1000);
clearInterval(timerId);
  if(y>40){
    resolve("success for p1")
  }
  else{
    reject("failed for p1")
  }


});
promise1.then(
result => console.log(result),
error =>console.log(error)

).then((result)=>{

  let promise2 = new Promise(function(resolve, reject) {
    let timerId = setInterval(() => console.log(), Math.random() * 1000);
    clearInterval(timerId)
    if(y<40){
      resolve("success for p2")
    }
    else{
      reject("failed for p2")
    }


  });
  return promise2


}).then(
  result=>console.log(result)
).catch(
  error=>console.log(error)
).finally(
  result=>console.log("Function end")
)
