const { Router } = require("express");
const { createUser, getAllUser} = require("../controllers/user.controller");
const { createUserValidator } = require("../validators/user.validator");


const userRouter = Router()

userRouter.post('/api/v1/users', createUserValidator, createUser)

userRouter.get('/api/v1/users', getAllUser)



module.exports = userRouter