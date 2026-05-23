const dbreu = require("../db")

const postage = dbreu.sequelize.define("agenda", {
    idagenda:{
        type: dbreu.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo_agenda:{
        type: dbreu.Sequelize.STRING
    },  
    data_agenda:{
        type: dbreu.Sequelize.DATEONLY
    },
    hora_agenda:{
        type: dbreu.Sequelize.TIME
    },
    descricao_agenda:{
        type: dbreu.Sequelize.TEXT
    }
}, {timestamps: false})

module.exports = postage
