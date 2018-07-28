// 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

// function tripleAndFilter(arr){
//     return arr.map(function(value){
//       return value * 3;
//     }).filter(function(value){
//       return value % 5 === 0;
//     })
//   }
console.log("connected to es6");
const tripleAndFilter = (arr) => arr.map(value => value * 3).filter(result => result % 5 === 0);
console.log(tripleAndFilter([5,10,7,20]));







/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

  function doubleOddNumbers(arr){
      return arr.filter(function(val){
          return val % 2 !== 0;
      }).map(function(val){
          return val *2;
      })
  }

*/
//Refactor the code using small steps
//Like a Russian Doll
//1. Start with a teeny one, that is nested the deepest

// (function(val){
//   return val *2;
// })
//refactors in
//val => val * 2
//now the code looks like this
// function doubleOddNumbers(arr){
//   return arr.filter(function(val){
//       return val % 2 !== 0;
//   }).map(val => val * 2)
// }

//2. Then move to a level higher and refactor this bit
// (function(val){
//   return val % 2 !== 0;
// })

//refactores in

//num => num % 2 !==0

//now the code looks like this
// function doubleOddNumbers(arr){
//   return arr.filter(num => num % 2 !==0)
//   .map(val => val * 2)
// }

//Finally, the top level function, which is basically all your nested code. You could try and start refactoring from the top level, but I tried and got confused in the process. It is better to start small!
//function doubleOddNumbers(arr){
  //   return arr.filter(num => num % 2 !==0)
  //   .map(val => val * 2)
  // }
//refactors in
const doubleOddNumbers = (arr) => arr.filter(num => num % 2 !==0).map(val => val * 2);
console.log(doubleOddNumbers([1,2,3,4,5,6]));
/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

  function mapFilterAndReduce(arr){
    return arr.map(function(val){
      return val.firstName
    }).filter(function(val){
      return val.length < 5;
    }).reduce(function(acc,next){
      acc[next] = next.length
      return acc;
    }, {})
  }
*/


/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
  createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

/* 5 - Given the following code: 


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
  
  var instructor = {
    firstName: "Colt",
    sayHi: function(){
      setTimeout(function(){
        console.log('Hello ' + this.firstName)
      },1000)
    }
  }

*/
