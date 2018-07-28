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
console.log(smallestValue([4,2]));

/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array.
 This function should return the first array with all of the values in the second array placed in the middle of the first array.

Examples:
    placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
    placeInMiddle([1],[3,4,5]) // [3,4,5,1]
    placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
    placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/

function placeInMiddle(arr, vals){
    //find middle of the array
    let middleOfArray = arr.length/2;
    console.log("length of array is " + middleOfArray);
    //now we know the first parameter to pass into splice() method, this is our middleOfArray
     arr.splice(middleOfArray, 0, ...vals);
     return arr;
}
//testing
console.log(placeInMiddle([1,2,6,7],[3,4,5])); // [1,2,3,4,5,6,7]
console.log(placeInMiddle([1],[3,4,5])); // [3,4,5,1]
console.log(placeInMiddle([1,6],[2,3,4,5])); // [1,2,3,4,5,6]
console.log(placeInMiddle([],[2,3,4,5])); // [2,3,4,5]
