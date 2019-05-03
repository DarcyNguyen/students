var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://anonymous:oGDF9HIRt3PMxGN0@cluster0-ioiff.mongodb.net/test?retryWrites=true"
    ,{useNewUrlParser:true});

app.set("view engine","ejs");


app.get("/", function(req,res){
    res.render("hello")
})

var studentSchema = new Schema({
    name: String,
    age: String
})

var Student = mongoose.model("Student", studentSchema)

var chuyen = new Student({
    name:"Nguyen Ngoc Chuyen",
    age: "3"
})

Student.create(chuyen, function(newStudent, error){
    if (error){
        console.log(error)
    } else {
        console.log(newStudent)
    }
})



app.listen(3000,function(){
    console.log("running")
})