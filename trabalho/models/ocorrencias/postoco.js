const dboco = require("../db")

const postoco = dboco.sequelize.define("ocorrencias", {
    idocorrencia: {
        type: dboco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_acionador:{
        type: dboco.Sequelize.STRING
    },
    data:{
        type:dboco.Sequelize.DATE
    },
    setor_ocorrencia:{
        type: dboco.Sequelize.STRING
    },
    descricao_ocorrencia:{
        type: dboco.Sequelize.TEXT
    },
    nivel:{
        type: dboco.Sequelize.ENUM('baixo','medio','alto')
    },
    status_ocorrencia: {
        type: dboco.Sequelize.ENUM('aberto','em andamento','resolvido')
    },
    observacao:{
        type: dboco.Sequelize.TEXT
    }
}, {timestamps: false})

module.exports = postoco


