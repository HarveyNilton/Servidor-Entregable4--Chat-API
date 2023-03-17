const MensajeService = require("../services/mensajes.services");


const createMensajes = async(req,res,next) => {
    try{
        const newMensaje = req.body
        const mensaje = await MensajeService.create(newMensaje)
        res.status(201).json(mensaje);
    }catch(error){
        next(error);
    }
}


const sendMendaje = async (req,res,next) =>{
    try {
        const {id} = req.params
        console.log(id);
        const mensajes = await MensajeService.createMensaj(id)
        res.status(201).send(mensajes)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createMensajes,
    sendMendaje,
}