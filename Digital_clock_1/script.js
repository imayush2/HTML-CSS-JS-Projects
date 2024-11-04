let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currentTime = new Date();

// console.log(currentTime);
// console.log(currentTime.getDate());
// console.log(currentTime.getHours());
// console.log(currentTime.getMinutes());
// console.log(currentTime.getSeconds());
// for update add set interval 


setInterval(()=>{
  let currentTime = new Date();
  hrs.innerHTML = (currentTime.getHours() <10 ?"0":"") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes() <10 ?"0":"") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds() <10 ?"0":"") + currentTime.getSeconds();
},1000);

// hrs.innerHTML = currentTime.getHours();
// min.innerHTML = currentTime.getMinutes();
// sec.innerHTML = currentTime.getSeconds();

