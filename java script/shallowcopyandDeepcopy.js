// shallow and deep is simply 
// a pass by reference and pass by value in c++
// in reference we send the address that why both valuw will be change
//but in pass by value we pass value so both value of the var is not changing
//shallow is pass by reference 
//deep is pass by value

var name1=[1,3,5,2,5]
var name2= name1;
name1[2]=6;
console.log(name1);
console.log(name2)
// as we can see of the array has changed why 
//cause we passing here the index that is address so both of the contains value changes

//but in thhis deep caseu
var a=5;
var b=a;
var b=10;
console.log(a)
console.log(b)