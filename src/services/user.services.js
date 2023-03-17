const Mensajes = require("../models/mensaje.model");
const User = require("../models/user.model");


class UserService {

    static async create(newUser) {
        try {
            const userCreated = await User.create(newUser)
            return userCreated
        } catch (error) {
            throw error
        }
    }

    static async getAll() {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'],order:['id']}
            })
            return users
        } catch (error) {
            throw error
        }
    }


    ///Por Resolver

   


    // Authenticate User
    static async getUser(email) {
        try {
            const user = await User.findOne({
                where: { email }
            })
            return user
        } catch (error) {
            throw error
        }

    }
}


module.exports = UserService