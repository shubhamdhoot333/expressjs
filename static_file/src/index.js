const path=require("path");
const express=require("express");
const app =express();
//builtin middleware
const staticPath =path.join(__dirname,"../public");
app.use(express.static(staticPath));

//about page 
app.get("/about",function(req,res){
    res.send("this is about page ");
});
//server listen &created 
app.listen(8000,function(){
console.log("server start at 8000");
})
