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

const dados_ocorrencias = app.define
const dados_inspecoes = app
const dados_agenda = app
const dados_anotacoes = app

//os status devem ser possivel ser alterado quando necessário (por exemplo, quando uma ocorrência for aberta, e no dia seguinte for concluída, o inspetor conseguir alterar o status no frontend para "concluído" ou "em andamento")


app.listen(3333, ()=>{
    console.log("servidor aberto!")
})
