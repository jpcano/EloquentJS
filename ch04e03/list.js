function arrayToList(array){
  if (array.length == 1)
    return {value: array[0], rest: null};
  else
    return {value: array[0], rest:arrayToList(array.slice(1))};
}

function listToArray(list){
	var array = [];
  	for (var node = list; node; node = node.rest)
      array.push(node.value);
  	return array;
}

function prepend(elm, list){
  return {value: elm, rest: list};
}

function nth(list, n){
  if (list == null)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, --n);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
