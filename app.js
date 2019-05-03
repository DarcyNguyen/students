var express = require('express');
var app = express();

app.use("view engine","ejs");

app.get("/", function(req,res){
    res.render("Hello")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("running on: "+process.env.PORT+":"+process.env.IP)
});