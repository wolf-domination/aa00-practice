/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

function keysInObject(obj) {
  // Your code here 
    // Using a for...in loop
    const keysForIn = [];
    for (let key in obj) {
      keysForIn.push(key);
    }
  
    // Using Object.keys
    const keysObjectKeys = Object.keys(obj);
  
    // Return the keys from both methods (you can choose one or the other)
    return keysObjectKeys; // Or return keysForIn;
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
