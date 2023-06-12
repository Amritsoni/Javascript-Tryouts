var menu=[2,3,5,62,7,4]
var res=menu.find(function(element){
    return element>4;
})
console.log(res)
//if non of element matches the condition it will return undefiend
//so what happened here is as soon as any element satisfy the condition it return and come out to the loop
// is this the way we want to print elements what about rest of the element here

//for that we use filter 
var menu=[2,3,5,62,7,4]
var result=menu.filter(function(element){
    return element>4;
})
console.log(result)
// what is it doing it check all element and catch that element and put into a another array and print the value
//this is the right way approch 
//and also we see here we are using call back function and for each fucntion for access the element and function under function 
//ONE QUE arise after creating the array it will affect the original array or not

console.log(menu)//no it is not affecting the original array (deep shallow)

//if that element not find or any element matching the condition it will return empty array