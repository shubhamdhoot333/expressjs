const path=require("path");
const express=require("express");
const app =express();
const port = process.env.PORT || 3000;
//require hbs
const hbs =require("hbs");
const { get } = require("http");
//builtin middleware
const staticPath =path.join(__dirname,"../public");
const templatePath =path.join(__dirname,"../templates/views");
const partialsPath =path.join(__dirname,"../templates/partials");

// to set the view enginee
app.set('view engine','hbs');
app.set("views",templatePath);
//register the hbs
hbs.registerPartials(partialsPath);
//app.use(express.static(staticPath));

app.get("/",function(req,res){
    res.render("index",{ username :"shubham" });
});
//about page 
app.get("/about",function(req,res){
    res.render("about",{ username :"shubham" });
});
app.get("/weather",function(req,res){
    res.send("this is weather page ");
});
//about inside if somepage not found then come this page of error  
app.get("/about/*",function(req,res){
    res.render("error_page",{ errorcomment:"404: this about page could not be open "});
});
// * is a universial operator if page not found then it give the error page to website 
app.get("*",function(req,res){
    res.render("error_page",{ errorcomment:"404: oops somthing went wrong "});
});
//server listen &created 
app.listen(port,function(){
console.log(`server start at ${port}`);
})
