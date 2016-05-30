function countChar(str, char){
    var count = 0;
    for(var i = 0; i < str.length; i++)
	if(str.charAt(i) == char)
	    count++;
    return count;
}
function count(char){
    return function(str) {
	return countChar(str, char);
    }
}
var countBs = count("B");
