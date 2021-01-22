// 1. Remove the Banana from the array.

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();

// 2. Sort the array in order.
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.sort();

// 3. Put "Kiwi" at the end of the array.
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
var array = ["Blueberries", "Kiwi", "Oranges"]
array.reverse();

["Oranges", "Kiwi", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

// My solution
console.log(array2[1][1]);

// Actual answer
array2[1][1][0];