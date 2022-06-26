var express = require("express");
var http = require("http");
const port = process.env.PORT || "5000"

var app = express();
http.createServer(app);

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Jilo Node JS project");
})

app.get("/end", (req, res) => {
    res.send("Ended ....");
})

app.listen(port, () => {console.log(`App started running on ${port}`)});