const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1> Hello World </h1>");
});

app.listen(3000, function(){
    console.log("Server started at port 3000")
});

//NOTE
//we only have 1 res.send() but we can have multiple res.write()
// app.get() is synchoronous that means that it runs only one time during whole process