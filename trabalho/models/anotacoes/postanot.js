const dbanot = require("../db")

const postanot = dbanot.sequelize.define("anotacoes", {
     idanotacao: {
        type: dbanot.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     nome_anotador: {
        type: dbanot.Sequelize.STRING
     },
     anotacao: {
        type: dbanot.Sequelize.TEXT
     },   
}, {timestamps:false, freezeTableName: true })

module.exports = postanot
