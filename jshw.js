//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["max", "HAS", "PuRple", "dog"]

function findWords(s, n) {
  //Your code goes here
  foundNames = []
  n.forEach(name => {
    if (s.indexOf(name) != -1)
      foundNames.push('Matched dog_name: ' + name);
  });
  if (foundNames.length === 0)
    return "No matches"
  return foundNames.join("; ")

}
console.log(findWords(dog_string, dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr) {
  //code goes here
  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) arr[i] = "even index"
  }
  console.log(arr);
}

replaceEvens(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]