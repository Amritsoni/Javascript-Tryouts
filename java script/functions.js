var a=3;
var b=4;
function sum(c,d){
   var ans = c+d;
   return ans;
}
var c=10;
var d=15;
console.log(a,b,c,d)
console.log(sum(a,b))
//function are nothing but block of code to run a specific task
//for revision here for deep copy
//so we can see that we also passing the value that somthing c have and d have but 
// but a and b value are changed or c or d value will not create realtion with the a and b
//so this is nothing but deep shallow here we passing just the values
// ONE IMPORTANT THING IS TO UNDERSTAND HERE IS
// function is java script also use as value or treated as a value 
// lets suppose as we create a function
var hello=function(){
   var sum=a+b;
   return sum;
}
console.log(hello(a,b))