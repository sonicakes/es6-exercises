console.log("connected to rest-spread!");
/* 
Write a function called smallestValue which accepts a variable number of parameters and returns
 the smallest parameters passed to the function.

Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/

function smallestValue(arr){
    
    //es6
   return Math.min(...arr);//5  
}
//test
console.log(smallestValue([3,4,5,3,1]));
