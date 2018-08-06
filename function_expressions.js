// Normal functional statement
function sayHi(){
  console.log('Hi');
};
sayHi();

// functional expression or anonymous function
var sayBy = function(){
  console.log('By');
};
sayBy();
 // call with parameter
 function callFunction(x){
     x();
 }
 callFunction(sayBy);
