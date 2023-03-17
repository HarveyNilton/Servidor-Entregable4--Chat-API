const { Router } = require("express");
const { createMensajes, sendMendaje } = require("../controllers/mensajes.controller");


const mensajesRouter = Router()

mensajesRouter.post('/api/v1/mensajes', createMensajes)

mensajesRouter.post('/api/v1/users/:userId/mensaje', sendMendaje)

module.exports = mensajesRouter