var helllo="AmritSoni";
var res=helllo.slice(1,3)//it kindly modifiy the string when we want to indclude or exculde the alphabate from the strings
//inside the slice(index(where we want to from),index(where we want to stop and that index will exclude not going to include))
console.log(helllo)
console.log(res)
// string start with zero indexing here zero is A and 1 is m and going on
//i put 1 and 3 mean start with m and end with or stop in i but i not gonna be include so i have get mr

// next is that slice not take any -1 value 
var helllo1="AmritSoni";
var res1=helllo1.slice(1,-3)
console.log(helllo1)
console.log(res1)

var helllo2="AmritSoni";
var res2=helllo2.substring(1,-3)
console.log(helllo2)
console.log(res2)

// is substr when we want the particular number of element
var helllo3="AmritSoni";
var res3=helllo3.substr(1,3)
console.log(helllo3)
console.log(res3)

//NEXT IS WANT TO CHANGE ANY ELEMENT WITH ANOTHER ONE 
//OR REPLACE ANY ELEMENT WITH ANOTHER ONE

var helllo4="AmritSoni";
var res4=helllo4.replace("i","a") // so i replaced i with a here but see only first i will get replace here
console.log(helllo4)
console.log(res4)

// next is when we want to fetch any aplhabate with its index
// we use CHARat
var helllo5="AmritSoni";
var res5=helllo5.charAt(4)// it will fetch the 4th index element
console.log(helllo5)
console.log(res5)

//also we can fetch the element with propert of array
var hi="needcoffee"
var res=hi[3]
console.log(res)


//next is 