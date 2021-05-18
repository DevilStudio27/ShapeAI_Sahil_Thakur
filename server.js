const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1+n2;
    res.send("Calculation answer is "+result+"."+"\nThanks for using our service");
});

app.listen(port, function () {
    console.log("Server has started on port: " + port + "\nGo on browser to http://localhost:" + port);
});