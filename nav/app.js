const express=require("express");
const app =express();
//home page 
app.get('/',function(req,res){
res.send("welcome to express");
});
//about page 
app.get("/about",function(req,res){
    res.send("this is about page ");
});
//contact page 
app.get("/contact",function(req,res){
    res.send("this is contact page ");
});
// temp page 
app.get("/temp",function(req,res){
    res.send("this is temp  page ");
});
//server listen &created 
app.listen(8000,function(){
console.log("server start at 8000");
})
