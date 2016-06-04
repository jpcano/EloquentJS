// TODO: improve reverseArrayInPlace
function reverseArray(array) {
  var reversed = []
  for (i = 0; i < array.length; i++) {
    reversed.unshift(array[i]);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  var reversed = []
  while(array.length > 0)
    reversed.push(array.pop());
  for (var i = 0; i < reversed.length; i++)
    array.push(reversed[i]);
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
