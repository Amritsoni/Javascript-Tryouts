var studentroll=[1,3,6,3,7,4,7]
var listofroll=["sd","Lk","hj","ik"]
//crud means
// C- CREAT R- READ  U- UPDATE D-DELETE
//so first is push function
var returning=listofroll.push("hi")
console.log(listofroll)// so its add the element in last of the array
//modified the original array
console.log(returning)// so earlier it lenght was 4 now its 5 so its modified
//PUSH- have 3 point 
//-> its add element right end the last
//->modified the original array
//->returning the modified size of the array


// then we have UNSHIFT 
//same as puch but  "JUST ADD THE ELEMENT AT FIRST PLACE"
var listofroll1=["sd","Lk","hj","ik"]
var returning2=listofroll1.unshift("hi")
console.log(listofroll1)
console.log(returning2)

// now if we want to delete the element form the array
var listofroll2=["sd","Lk","hj","ik"]
var returning3= listofroll2.pop()
console.log(listofroll2)
console.log(returning3)
//what pop does-
// removes the element at last 
//giving and returning the eleminated eliment not the length of array like puch

var listofroll4=["sd","Lk","hj","ik"]
var returning4= listofroll4.shift()
console.log(listofroll4)
console.log(returning4)
//same works as pop only removes the element or delete the element at the staring

//NOW THE MOST REALSITC THING IS replice
//when we want to update the element or delete the element in between or add the element in between  we use replice

var listofroll5=["sd","lk","hj","ik"]
var returning5 = listofroll5.splice(1,1)
console.log(listofroll5)
console.log(returning5)
// so inside the splice (index,how many element you want to delete,element that you wanna be add that location)

// then after that there one more function  add item fucntion

var menu=["f1","f3","f5"]
function addItel(item){
    menu.unshift(item)
    }
addItel("f4")
console.log(menu)
