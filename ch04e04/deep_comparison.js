function deepEqual(a, b) {
    if (Object.keys(a).length != Object.keys(b).length)
	return false; 
    for (var p in a) {
	if (!(p in b))
	    return false;
   	if (typeof (a[p]) == "object" && a[p] != null &&
    	    typeof (b[p]) == "object" && b[p] != null) {
    	    if (!deepEqual(a[p], b[p]))
		return false;
	}
	else if (a[p] === b[p]) {
            return true;
	} else {
    	    return false;
	}   
    }
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
