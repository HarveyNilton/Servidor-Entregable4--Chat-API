const { Sequelize } = require("sequelize");


const db = new Sequelize({
    database: "entregable_chat",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    dialect:'postgres',
    logging:false
})

module.exports = db;