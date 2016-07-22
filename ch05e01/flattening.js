var arrays = [[1, 2, 3], [4, 5], [6]];
var flattened = arrays.reduce(function(cat, cur) {
	return cat.concat(cur);
});
console.log(flattened);
