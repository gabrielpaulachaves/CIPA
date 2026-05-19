//npm init -y
//npm install --save express
//npm install nodemon -g
//npm install --save sequelize
//npm install --save mysql2
//npm install --save express-handlebars
//npm install --save body-parser



const express = require("express")
const app = express()
const Sequelize = require("sequelize")
const {engine} = require("express-handlebars")
const bodyparser = require("body-parser")
const sequelize = new Sequelize("cipa", "root","",{
    host: "localhost",
    dialect: "mysql"
})

app.engine("handlebars", engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get("/home", (req, res)=>{
    res.render("home")
})



app.listen(3333, ()=>{
    console.log("servidor aberto!")
})
