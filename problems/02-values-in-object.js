/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  // Your code here 
    // Using a for...in loop
    const valuesForIn = [];
    for (let key in obj) {
      valuesForIn.push(obj[key]);
    }
  
    // Using Object.values
    const valuesObjectValues = Object.values(obj);
  
    // Return the values from both methods (you can choose one or the other)
    return valuesObjectValues; // Or return valuesForIn;
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
