function isEven(rawnum) {
    function isEvenRec (n) {
	if (n == 0)
	    return true;
	else if (n == 1)
	    return false;
	else
    	    return isEven(n - 2);
    }
    return isEvenRec(rawnum < 0 ? -rawnum : rawnum)
}
