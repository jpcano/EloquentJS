function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

function hasKnownMother(person) {
    return person.mother != null && byName[person.mother] != undefined;
}

function yearsToMother(person) {
    return person.born - byName[person.mother].born;
}

console.log(average(ancestry.filter(hasKnownMother).map(yearsToMother)));
// → 31.2
