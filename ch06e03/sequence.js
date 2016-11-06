function logFive(s) {
    for(var i = 0; i < 5 && s.hasNext(); i++) {
  	console.log(s.next());
    }
}

function ArraySeq(array) {
    this.array = array;
    this.state = 0;
}

ArraySeq.prototype.hasNext = function() {
    if (this.state < this.array.length)
	return true;
    else
	return false;
}

ArraySeq.prototype.next = function() {
    return this.array[this.state++]
}

function RangeSeq(min, max) {
    this.min = min;
    this.max = max;
}

RangeSeq.prototype.hasNext = function() {
    if (this.min > this.max)
	return false;
    else
	return true;
}

RangeSeq.prototype.next = function() {
    return this.min++;
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
