const express = require ("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",function(req,res){
    var wt=Number(req.body.wt);
    var ht=Number(req.body.ht);
    var result= wt/(ht*ht);

   res.send("The BMI is "+result) 
});

app.listen(2000,function(){
    console.log("Server is running on port 2000.");
});
