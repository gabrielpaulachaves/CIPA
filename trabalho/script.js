const express = require("express")
const app = express()
const Sequelize = require("sequelize")
const sequelize = new Sequelize("CIPA", "root","",{
    host: "localhost",
    dialect: "mysql"
})