function readStreamAsString(stream, callback) {
    var data = "";
    stream.on("data", function (chunk) {
        data += chunk.toString();
    });
    stream.on("end", function () {
        callback(null, data);
    });
    stream.on("error", function (error) {
        callback(error);
    });
}

var http = require("http");

["text/plain", "text/html", "application/json", "application/rainbows+unicorns"].forEach(function(accept){
    http.request({
        hostname: "eloquentjavascript.net",
        path: "/author",
        method: "GET",
        headers: { Accept: accept }
    }, function (response) {
        readStreamAsString(response, function (error, data) {
            if (error)
                throw error;
            console.log(data);
        });
    }).end();
});
