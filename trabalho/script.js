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
app.engine("handlebars", engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(express.static("public"))


app.get("/", (req, res)=>{
    res.render("home")
})

app.get("/anotacoes", (req, res)=>{
        postanot.findAll({raw: true, order:[["idanotacao", "DESC"]]}).then((anot)=>{res.render("./anotacoes", {postanot: anot})}) 
})

app.get("/ocorrencias", (req, res)=>{
    postoco.findAll({raw: true, order:[["idocorrencia", "DESC"]]}).then((ocor)=>{res.render("./ocorrencias", {postoco: ocor})})
})

app.get("/inspecoes", (req, res)=>{
    res.render("./inspecoes")
})

app.get("/reuniao", (req, res)=>{
    postage.findAll({raw: true, order:[["idagenda", "DESC"]]}).then((age)=>{res.render("./reuniao", {postage: age})})
})




app.post("/anot", (req, res)=>{
    postanot.create({
        nome_anotador: req.body.nome,
        anotacao: req.body.anotacao
    }).then(()=>{res.redirect("/anotacoes")}).catch((error)=>{res.send(error)})
})

app.post("/oco", (req, res)=>{
    postoco.create({
        nome_acionador: req.body.nomeoco,
        data: req.body.dataoco,
        setor_ocorrencia: req.body.setoroco,
        descricao_ocorrencia: req.body.descoco,
        nivel: req.body.niveloco,
        status_ocorrencia: req.body.statusoco,
        observacao: req.body.obsoco
    }).then(()=>{res.redirect("/ocorrencias")}).catch((error)=>{res.send(error)})
})
app.post("/alterstatusoco", (req, res)=>{
    postoco.update({
        status_ocorrencia: req.body.alterstatusoco
    }, {where: {"idocorrencia": req.body.idoco}}).then(()=>{res.redirect("/ocorrencias")}).catch((error)=>{res.send(error)})
})

app.post("/ins", (req, res)=>{
    postins.create({
        setor_inspecao: req.body.localins,
        descricao_inspecao: req.body.descins,
        acao:req.body.acaoins,
        status_inspecao: req.body.statusins,
        data_inspecao: req.body.datains
    }).then(()=>{res.redirect("/inspecoes")}).catch((error)=>{res.send(error)})
})
app.post("/age", (req, res)=>{
    postage.create({
        titulo_agenda: req.body.nomeage,
        data_agenda: req.body.datage,
        hora_agenda: req.body.horage,
        descricao_agenda: req.body.aborage
    }).then(()=>{res.redirect("/reuniao")}).catch((error)=>{res.send(error)})
})





app.get("/del/:id", (req, res)=>{
    postanot.destroy({where:{"idanotacao": req.params.id}}).then(()=>{res.redirect("/anotacoes")}).catch((error)=>{res.send(error)})
})
app.get("/del2/:id", (req, res)=>{
    postins.destroy({where:{"idinspecao": req.params.id}}).then(()=>{res.redirect("/inspecoes")}).catch((error)=>{res.send(error)})
})
app.get("/del3/:id", (req, res)=>{
    postoco.destroy({where:{"idocorrencia": req.params.id}}).then(()=>{res.redirect("/ocorrencias")}).catch((error)=>{res.send(error)})
})
app.get("/del4/:id", (req, res)=>{
    postage.destroy({where: {"idagenda": req.params.id}}).then(()=>{res.redirect("/reuniao")}).catch((error)=>{res.send(error)})
})




//os status devem ser possivel ser alterado quando necessário (por exemplo, quando uma ocorrência for aberta, e no dia seguinte for concluída, o inspetor conseguir alterar o status no frontend para "concluído" ou "em andamento")


app.listen(3333, ()=>{
    console.log("servidor aberto!")
})
