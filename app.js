const express =require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
console.log(date());
const app=express();
var newItems=["task 1"," task 2"];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,resp){
    var typeOfDay=date();
    resp.render("to-do-list",{day:typeOfDay,item:newItems })
})

app.post("/",function(request,res){
newItem=request.body.newItem;
newItems.push(newItem);
res.redirect("/");
}
)


app.listen(3000,function(){
    console.log("Server is up and running ");
})