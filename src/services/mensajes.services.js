const Mensajes = require("../models/mensaje.model");
const User = require("../models/user.model");

class MensajeService {

    static async create(newMensaje) {
        try {
            const result = await Mensajes.create(newMensaje)
            return result
        } catch (error) {
            throw error
        }
    }

    static async createMensaj(id){
        try {
            const result = await User.findOrCreate({
                where: { id: id}
            })
            return result
        } catch (error) {
            throw error
        }
    }


 
}

module.exports = MensajeService