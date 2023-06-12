//so first is while loop
var i=1;
while(i<=10){
    console.log(i);
    i++;
}

// second part is do while loop 
//simliar to the while loop in while loop we know firstly condition will check then insidation will happen
// in do while loop first insidation will implement then the condition will checked
var j=11;
do{
    console.log(j)
}while(j<=10)
// so as we can see j=11 fistly it print the 11 means implements the insidation
//then check the condition and break the loop but in while
while(j<=10){
    console.log(j+"print from the while loop")
}
// it is not printing cause firstly condition checked and its not satisfiying


/// then offcourse FOR LOOP
for(var i=1;i<=10;i++){
    console.log(i)
}