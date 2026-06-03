const Sequelize = require("sequelize")
const sequelize = new Sequelize("cipa", "root", "GTanalista2025!", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}