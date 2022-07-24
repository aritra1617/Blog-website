//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');

const app = express();
let posts=[]
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));













app.get("/",function(req,res){
  res.render("home",{fronttext:homeStartingContent,AllPost:posts})
})
app.get("/contact",function(req,res){
  res.render("contact",{fronttext:contactContent});
})
app.get("/about",function(req,res){
res.render("about",{fronttext:aboutContent});
})
app.get("/compose",function(req,res){
  res.render("compose")
})
app.get("/posts/:temp",function(req,res){
  const param=_.lowerCase(req.params.temp);
   for(let i=0;i<posts.length;i++)
   {
     if(_.lowerCase(posts[i].title)===param)
     {
        res.render("post",{title:posts[i].title,post:posts[i].post});
     }
   }
})
app.post("/compose",function(req,res){
   const post={
     title:req.body.newtitle,
     post:req.body.newpost,
   }
   posts.push(post);
   res.redirect("/")
})
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
