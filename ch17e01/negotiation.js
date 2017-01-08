var req = new XMLHttpRequest();
req.open("GET", "author", false);

var types = ["text/plain", "text/html", "application/json", 
             "application/rainbows+unicorns"];
for (var i = 0; i < types.length; i++) {
  	req.open("GET", "author", false);
	req.setRequestHeader("Accept", types[i]);
	req.send(null);
	console.log(req.status, req.statusText);
	console.log(req.getResponseHeader("content-type"));
	console.log(req.responseText);
}