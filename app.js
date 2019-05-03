var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASEURL,{useNewUrlParser:true});

app.set("view engine","ejs");


app.get("/", function(req,res){
    res.render("hello")
})

app.listen(process.env.PORT, process.env.IP)