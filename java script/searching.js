var menu=["f1","f2","f3","f4","f5"]
console.log(menu.indexOf("f2"))//here simply use of indeof we wil find the index of that element if that element is not present in that array it will print -1
console.log(menu.indexOf("f0"))//so f0 is not present in the array so it showing -1
//now inside the indeof of we pass two parameter first is for whatever element we are finding second is for where we want to start or from which index start for finding it
//remember indeof always find the element left to right direction
console.log(menu.indexOf("f2",2))//so here as we can see f2 is present in the array but searching start from second index that is f3 so f2 not found
//now the nest is lastindexof
var helllo=["f1","f3","f2","f3","f5"]
console.log(helllo.lastIndexOf("f3"))//so the lastindexof will start searching always right to left 
//thats why f3 index is 3 it start right-to-left
console.log(helllo.lastIndexOf("f3",2))
//so it start right to left here start finding element from second index to right to left it is f2
//now f2 is 0 index and then after theat f3 is peresent that will match the parament and return 1


// THEN ONE MORE INCLUEDS 
//this is same behaviour as like indexof it start finding element left to right
//and it check element is present or not it returm boolean value true or false
console.log(helllo.includes("f3"))
