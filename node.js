console.log("Hello Amrit well good going you don't have any choice")
var name=5
console.log(typeof(name))
console.log("string"+20+10)
console.log(10+20+"string")
//so in java string compilation in runtime and also it will 
//run the code left to right or we can say it will complie the code
//left to right that's why (10+20+"string") is first 10+20 is 30 then 30 will add it up with the string 
// and in ("string"+20+10) in this first string and 20 will add and make it string20
// and then finally add 10 and make it string2010 its work like that in java script
var know="hello"
console.log(typeof(know))
//typeof mainly use of to know the datatype value whenever
//in js we use var of defining the datatype and also we using 
// any name to assing that value to that data type
//these are the basic here 
console.log(typeof(undefined))

console.log(typeof(null))
//here two type of data type that is undefined and null here undefined is that which we have fully empty container
//but in null have the vaule that is nothing but is zero . container not fully empty here some part that needs to be understand
//that if we apply any arthmetic equation in the undefined it will give the output NaN
//in null case the value of null is 0 so any eqution of something else are being applied in zero in null case
//for example
var x=null+1;
console.log(x)
////////////////////////
var y=undefined+1
console.log(y)

//THEN FORWORD WE HAVE NOTHING BUT "ARTHMETIC OPERATORS"
var a=9
var b=8
var addition= a+b
var multiply= a*b
var div = a/b // give you the quaiout
var remainder = a%b // give you the remainder
var diff= a-b
console.log(addition)
console.log(multiply)
console.log(remainder)
console.log(diff)

// then we have Assginment Opreator 
// += -= *=
// what means of these operator
b+=a
console.log(b)
//simple meaning of this is b=b+a
b*=a //this if 17 * 9 doing 
console.log(b)

//THEN WE HAVE COMPARISON OPERATOR 
 var c=6
 var d="6"
 console.log(c==d)// it checking 6 and 6 and giving us true but as we can see the data type is not same 
 // one is string and one is number for strictly checking
 //for strictly checking we use === this operator will check data type also
 console.log(c===d)

 // then we have LOGICAL OPERATOR 
 // &&  ||
 // && we true when both condition will true other wise it will output give false
 // || we give true if one condition will true and give flase when both condition is false
 console.log(true&&false)
 console.log(false&&true)
 console.log(true&&true)
 console.log(true||false)
 console.log (false||false)
 console.log(!false)// this is negation opreator that will give us just opposite output whatever we will put on 
 // just opposite of that

 // nothing but last is CONDITIONAL OPERATORS
 var age=34
 var result=age>26?"yes":"no"// it simply check the age with operator then if it is true then print the string that is  next to the ? if it is not true then it will print the value or string that is after the colon string
 console.log(result)
 var result=age>67?"yes":"no"
 console.log(result)

 /////done....////////