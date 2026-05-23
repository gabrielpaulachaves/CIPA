//npm init -y
//npm install --save express
//npm install nodemon -g
//npm install --save sequelize
//npm install --save mysql2
//npm install --save express-handlebars
//npm install --save body-parser
const express = require("express")
const app = express()
const {engine} = require("express-handlebars")
const bodyparser = require("body-parser")
const postoco = require("./models/ocorrencias/postoco")
const postins = require("./models/inspecoes/postins")
const postage = require("./models/agenda/postage")
const postanot = require("./models/anotacoes/postanot")
const { where } = require("sequelize")
console.log(typeof postanot)
console.log(Object.keys(postanot))
app.engine("handlebars", engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


app.get("/home", (req, res)=>{
    res.render("home")
})
app.get("/anotacoes", (req, res)=>{
        postanot.findAll({raw: true, order:[["idanotacao", "DESC"]]}).then((anot)=>{res.render("./anotacoes", {postanot: anot})}) 
})
app.get("/inspecoes", (req, res)=>{
    res.render("./inspecoes")
})
app.get("/ocorrencias", (req, res)=>{
    res.render("./ocorrencias")
})
app.get("/reuniao", (req, res)=>{
    res.render("./reuniao")
})

app.post("/anot", (req, res)=>{
    postanot.create({
        nome_anotador: req.body.nome,
        anotacao: req.body.anotacao
    }).then(()=>{res.redirect("/anotacoes")}).catch((error)=>{res.send(error)})
})

app.get("/del/:id", (req, res)=>{
    postanot.destroy({where:{"idanotacao": req.params.id}}).then(()=>{res.redirect("/anotacoes")}).catch((error)=>{res.send(error)})
})




//os status devem ser possivel ser alterado quando necessário (por exemplo, quando uma ocorrência for aberta, e no dia seguinte for concluída, o inspetor conseguir alterar o status no frontend para "concluído" ou "em andamento")


app.listen(3333, ()=>{
    console.log("servidor aberto!")
})
