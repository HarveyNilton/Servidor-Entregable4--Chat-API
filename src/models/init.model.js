
const Mensajes = require("./mensaje.model")
const SalaChat = require("./sala.chat.model")
const TypeChat = require("./type.chat.model")
const User = require("./user.model")


const initModels = () => {
    User.hasMany(SalaChat,{foreignKey:'id_user'})
    SalaChat.belongsTo(User,{foreignKey:'id_user'})

    User.hasMany(Mensajes,{foreignKey:'id_user'})
    Mensajes.belongsTo(User,{foreignKey:'id_user'})

    TypeChat.hasMany(SalaChat,{foreignKey:'idtype_chat'})
    SalaChat.belongsTo(TypeChat,{foreignKey:'idtype_chat'})

    TypeChat.hasMany(Mensajes,{foreignKey:'idtype_chat'})
    Mensajes.belongsTo(TypeChat,{foreignKey:'idtype_chat'})
    
}

module.exports = initModels