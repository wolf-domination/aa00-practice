/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here 
    // Check if both objects have the given key
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      // Return an array containing the values of the key from both objects
      return [obj1[key], obj2[key]];
    } else {
      // If either object doesn't have the key, return an empty array
      return [];
    }
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
