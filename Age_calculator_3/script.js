let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];   // by this line future date con't be selected 
let result = document.getElementById("result");

function calculateAge(){
  let DOB = new Date(userInput.value);

  let d1 = DOB.getDate();
  let m1 = DOB.getMonth() + 1;
  let y1 = DOB.getFullYear();


  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d , m , y ;

   y = y2 - y1;

   if(m2 >= m1){
    m = m2 - m1;
   }
   else{
    y--;
    m = 12 + y2 - y1;
   }

   if(d2 >= d1){
    d = d2 - d1;
   }
   else{
    m--;
    d = getDaysinMonth(y1, m1) + d2 - d1;
   }
   if(m<0){
    m = 11;
    y--;
   }

   console.log(y,m,d);
   result.innerHTML = `You are ${y} years ${m} months ${d} days`;
}

function getDaysinMonth(year, month) {
    return new Date(year, month, 0).getDate();
}