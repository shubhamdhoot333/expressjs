const path=require("path");
const express=require("express");
const app =express();
const hbs =require("hbs");
const port = process.env.PORT || 3000;
//require hbs
//builtin middleware
const staticPath =path.join(__dirname,"../public");
const templatePath =path.join(__dirname,"../templates/views");
const partialsPath =path.join(__dirname,"../templates/partials");
//access index.html page directly 
app.set('view engine','hbs');
app.set("views",templatePath);
//register the hbs
hbs.registerPartials(partialsPath);

app.set("views",templatepath);
//app.use(express.static(staticPath));

app.get("/",function(req,res){
res.render("index");
});
//about page 
app.get("/about",function(req,res){
    res.render("about ");
});
app.get("/weather",function(req,res){
    res.render("weather");
});
app.get("*",function(req,res){
    res.render("error");
});
//server listen &created 
app.listen(port,function(){
console.log(`server start at ${port}`);
})
