const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({extended: true})); // extended: true helps us to post parsed body. app.use is written to use bodyParser into our app.


app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");    // when we host application, we exactly don't know where our file resides. __dirname helps to get that location.
});

app.post("/", function(req, res){
  var num1= Number(req.body.num1);
  var num2= Number(req.body.num2);
  var result = num1+num2;
  res.send(""+result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is "+bmi);
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
