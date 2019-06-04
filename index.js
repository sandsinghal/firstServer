const express = require('express');
const bodyparser = require('body-parser');
const app = express();
//app.use(bodyparser.json());
app.use(bodyparser())

app.get("/form0", function(req,res){
    res.sendFile("/home/batshiv/node_ex1/form.html")
})

app.get("/random",function(req,res){
    res.send("A random number: "+Math.random());
})

app.post("/sayhello",function(req,res){
    res.send("Hello "+ req.body.name)
})

app.post("/mydata",function(req,res){
    res.json({"": req.body})
})

app.listen(8080);