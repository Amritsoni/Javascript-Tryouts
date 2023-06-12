var arr=["a1","a2","a3","a4","a5"];
for(var i=0;i<=arr.length;i++){
    console.log(arr[i]);
}

var i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}
// these are traditional methode which is very frecruently used in js

// here in js we have for loop methode to asses the value or index of the arr
for(var index in arr){
    console.log(index)
}
// this loop access the index of the arr while printing index 

for(var value of arr){
    console.log(value)//this is access the value of arr
}


// then after that there is also third methode

arr.forEach ( function(val,idx,array){
    console.log(idx)
    console.log(val)
    console.log(array)
})
// this is something where we are using function inside the function 
// that is something known as call back function
// again here for arr.forEach fucntion used and inside there is one more fucntion
// that is access the val idx and array also 

// also we can perform sum task in like see
arr.forEach (function(val,idx,array_){
    console.log(val+1)
    
});
console.log(arr)
// as here as we can see that perform some addition to it 
// and also after performing task we print the array as same as we input
// so this is pass by value means deep copy of it
//but when we use foreach loop inside the variable it will return the value as UNDEFIEND

var res=arr.forEach(function(val,idx,array){
    console.log(val)

})
console.log(res)