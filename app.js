'use strict';
let x = 5.0;

while(true){
  let x2 = x - (x * x - 3) / (x * 2);

  if(Math.abs(x2-x)<0.00001){
    break;
  }
  x = x2;

}
console.log(x);
