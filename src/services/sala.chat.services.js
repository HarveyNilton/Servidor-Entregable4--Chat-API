
const SalaChat = require("../models/sala.chat.model");


class SalaChatService{
    
    static async create(salaChat){
        try {
           const result = await SalaChat.create(salaChat)
           return result
        } catch (error) {
            throw error
        }
    }

    
}

module.exports = SalaChatService