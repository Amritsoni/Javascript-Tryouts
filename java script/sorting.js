var menu=[3,2,6,7,4,1,8];
var alpha=["dh","ab","hj","hi"]
//sort them 
//so we have sort function here but downgrade is that 
// it will sort only strings and 1 digit number 
menu.sort();
alpha.sort();
console.log(menu)
console.log(alpha)
// it is sorting but when we have 2 digit num then 
var mmm=[3,1,23,2,6,7,41,11,8];
mmm.sort()
console.log(mmm)
// as we can see it can sort the 2 digit number 
// what is it doing , its fistly convert the number into string format uts16 decoding
// then it will start sorting so it get 1 then after that it get 1 in 11 so it print 11 in the second place

//so how we can do sorting with 2 digit or any digit num
var mmm=[3,1,23,2,6,7,41,11,8];
mmm.sort(function(a,b){
    return a-b;
})
console.log(mmm)