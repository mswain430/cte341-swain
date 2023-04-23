// console.log('Rhoda Ready')
var express = require("express");
var app = express();

app.set("port", process.env.PORT || 3000);
app.get("/", getData);

function getData(req, res) {
    console.log("getting data");
    res.write("{\"name\":\"Millie\"}");
    res.end();
}

app.listen(app.get("port"), () => console.log("server is listening on port " + app.get("port")));
