const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: ben@gmail.com")
});

app.get("/about", function(req, res){
  res.send("<p>My name is Ben. I'm an aspiring software developer. I'm currently learning JS and this is my first project using Express.js.</p>")
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
