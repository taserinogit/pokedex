const express = require("express")
const https = require("https");

const app = express ()
const port = 3000;

//kullanıcının verdiği inputu çekip kendi değişkenimizde saklıyoruz
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log("Server is started at port "+ port);
})

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/index.html");
})


app.post("/", (req,res)=>{
    let id = Number(req.body.pokemon);
});