//the meaning of reduce is here to all value or to make all the value in single value 
//for eg- we have array of diff diff elements in there and make the sum of it that will convert into a single vaule 
//for eg- we have array of diff diff number and want to fetch the max of it or min of it that converstion in a single value is nothing but reduce fucntion do

var numbers=[5,5,6,4]
var res=numbers.reduce(function(acc,ele){
    return acc=acc+ele;
},0)
console.log(res)