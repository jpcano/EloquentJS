function withBoxUnlocked(body) {
    // Your code here.
    box.locked = false;
    try {
  	return body();
    } finally {
  	box.locked = true;
    }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
	throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}
console.log(box.locked);
// → true
