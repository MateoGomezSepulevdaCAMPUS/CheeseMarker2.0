const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');

const getUsers= (req,res)=>{
    res.json({"message":"home page"})
}
const postUsers= async (req,res)=>{
    try {

        const {nombre, email, password, rol}= req.body;
        const usuario = new Usuario({nombre,email,password,rol});
        // Verificar duplicado de correo
        const existeEmail= await Usuario.findOne({email});
        if (existeEmail) {
            return res.status(400).json({error:"Email ya resgistrado"})
        }
        //Encriptando contraseña //Salt es una variable que genera un algoritmo 
        const salt = bcryptjs.genSaltSync();
        usuario.password= bcryptjs.hashSync(password,salt)
        await usuario.save()
        res.json({
        "message":"post api",usuario})
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
    
}
const deleUsers=(req,res)=>{
    res.json({
        "message":"delete api"})
}
const addUsers=(req,res)=>{
    res.json({
        "message":"put api"})
}
const updateUsers=(req,res)=>{
    res.json({
        "message":"patch api"})
}
module.exports = {getUsers,postUsers,deleUsers,addUsers,updateUsers}