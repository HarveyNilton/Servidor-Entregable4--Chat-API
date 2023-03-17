
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./utils/database')
const initModels = require('./models/init.model')
const userRouter = require('./routers/user.router')
const authRouter = require('./routers/auth.router')
const salaChatRouter = require('./routers/sala.chat.router')
const mensajesRouter = require('./routers/mensajes.router')
const typeChatRouter = require('./routers/type.chat.router')
const errorHandlerRouter = require('./routers/error.handle.router')

const app = express()


const PORT = 5300

initModels()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Database connected')
    })
    .catch(err => console.log(err))

db.sync({ alter: true })
    .then(() => {
        console.log('Database synced')
    })
    .catch(err => console.log(err))

app.use(userRouter)
app.use(authRouter)
app.use(salaChatRouter)
app.use(mensajesRouter)
app.use(typeChatRouter)

errorHandlerRouter(app)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
