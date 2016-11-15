function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
	return a * b;
    else
	throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    for (;;) {
  	try {
            var result = primitiveMultiply(a, b);
            return result;
  	} catch (e) {
    	    if (e instanceof MultiplicatorUnitFailure)
      		console.log("Multiplication failed. Trying again.");
    	    else        
      		throw e;
  	}
    }
}

console.log(reliableMultiply(8, 8));
// → 64
