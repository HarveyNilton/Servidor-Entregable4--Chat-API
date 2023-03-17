const Mensajes = require("../models/mensaje.model")
const SalaChat = require("../models/sala.chat.model")
const TypeChat = require("../models/type.chat.model")
const User = require("../models/user.model")

class TypeChatService {

    static async typeChatWithmensajes(typeChatId) {
        try {
            const result = await TypeChat.findByPk(typeChatId, {
                include: [{
                    model:SalaChat,
                    attributes:['id'],
                    include:{
                        model:User,
                        attributes:['username']
                    }
                },{
                    model:Mensajes,
                    attributes:['content'],
                    include:[{
                        model:User,
                        attributes:['username']
                    }]
                }]
            })

            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = TypeChatService