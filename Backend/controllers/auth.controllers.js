const {response} = require ('express');
const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs')

const login = async(req,res = response)=>{
    const {email,password} = req.body;
    try {
        /* Verificar si exite el email en la base de datos */
        const usuarioExis = await Usuario.findOne({email});
        if (!usuarioExis) {
            return res.status(400).json({msg:"Email no exite"})
        }
        /* Verificar si el usuario esta activo */
        if(emailExiste.estado === false){
            return res.status(400).json({msg:"Usuario no esta activo"})
        }

        /* Verificar el password es correcto y coincide con la llave */
        const passwordValido =  bcryptjs.compareSync(password,emailExiste,password);

        if (!passwordValido) {
            
        }
       res.json({
        msg: "Jjejejejeje chupaloooooooooooooooooo" 
    })
    } catch (error) {
        console.log(error);
        return res.json();
        msg: "Datos insuficientes, Contante a PHIDOLI"
    }
    
}

module.exports = {
    login
}