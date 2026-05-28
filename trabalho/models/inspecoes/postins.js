const dbins = require("../db")

const postins = dbins.sequelize.define("inspecoes", {
    idinspecao: {
        type: dbins.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    setor_inspecao: {
        type: dbins.Sequelize.STRING
    },
    descricao_inspecao: {
        type: dbins.Sequelize.TEXT
    },
    acao: {
        type: dbins.Sequelize.TEXT
    },
    status_inspecao: {
        type: dbins.Sequelize.ENUM('aberto','em andamento','resolvido')
    },
    data_inspecao: {
        type: dbins.Sequelize.DATE
    },
    id_ocorrencia:{
       type: dbins.Sequelize.INTEGER
    }
}, {timestamps: false, freezeTableName: true})

module.exports = postins
