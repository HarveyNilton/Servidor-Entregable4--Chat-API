const { Router } = require("express");
const { getTypeChatWithMensajes } = require("../controllers/type.chat.controller");


const typeChatRouter = Router()

typeChatRouter.get('/api/v1/typeChat/:typeChatId/mensajes', getTypeChatWithMensajes)

module.exports = typeChatRouter
