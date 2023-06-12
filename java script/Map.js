var numbers=[2,4,5,6,3]
var narr=numbers.map(function(ele){
    return ele*2;
}).filter(function(ele){
    return ele>6;
})
console.log(numbers)
console.log(narr)
// Map function will allow us to transform the array 
// did't affect the original array it create new array
// we can also perfrom diff diff task over it why beauce it returns new array in which can perform any task
// how is it diff from the foreach loop there we also access the element so there also we can perform the task - NO we can do these things in for each loop 
//why because foreach returns undifined in undifiend we can not perform any task over it(foreach returns undefiend) (map returns new array)
//second thing we can add sum filteration in map but we can in foreach loop (map is chainable) (foreach is unchainable)


