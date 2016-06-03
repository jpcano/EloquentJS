// function range (start, end) {
//     var result = [];
//     for (var i = start; i <= end; i++) {
// 	result.push(i);
//     }
//     return result;
// }

function range (start, end, step) {
    var result = [];
    var step;
    step = arguments[2] == undefined ? 1: arguments[2];
    step = start <= end ? Math.abs(step) : -Math.abs(step);
    if (step > 0)
	for (var i = start; i <= end; i += step)
 	    result.push(i);
    else if (step < 0)
	for (var i = start; i >=  end; i += step)
 	    result.push(i);
    return result;
}

function sum (numbers) {
    var result = 0;
    for (var i in numbers) {
	result += numbers[i];
    }
    return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
