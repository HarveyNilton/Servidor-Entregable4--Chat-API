const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Mensajes = db.define("mensajes", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idtype_chat:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    timestamps: true,
    updatedAt:false
})

module.exports = Mensajes;