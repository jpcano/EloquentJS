function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function century(person) {
    return Math.ceil(person.died / 100);
}

function age(person) {
    return person.died - person.born;
}

function groupBy(array, grouper) {
    var byGroup = {};
    array.forEach(function(person) {
	var group = grouper(person);
	if (byGroup[group] == undefined)
	    byGroup[group] = []
	byGroup[group].push(person);
    });
    return byGroup
}

var ancestryByCentury = groupBy(ancestry, century);

for (var c in ancestryByCentury)
    console.log(c + ": " + average(ancestryByCentury[c].map(age)));

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
