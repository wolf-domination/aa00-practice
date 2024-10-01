/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  // Your code here 
    // Create an empty object to store the counts
    const scoreCounts = {};
  
    // Iterate over each person in the `people` array
    for (const person of people) {
      // Extract the person's name and score
      const { name, score } = person;
  
      // If the person's name already exists in the `scoreCounts` object, increment their score count
      if (scoreCounts[name]) {
        scoreCounts[name] += score;
      } else {
        // Otherwise, add the person's name to the `scoreCounts` object with their initial score
        scoreCounts[name] = score;
      }
    }
  
    // Return the `scoreCounts` object containing the total scores for each person
    return scoreCounts;
  }
  


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
