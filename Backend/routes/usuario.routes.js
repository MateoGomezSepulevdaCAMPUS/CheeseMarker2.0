const {Router}= require ('express');
const {check} = require ('express-validator')
const {validationDoc} = require('../middlewares/validate.documents.js')
const {rol} = require ('../models/Role.js')
const router = Router();
const {getUsers,postUsers,deleUsers,addUsers,updateUsers} = require ('../controllers/usuario.controllers.js');
const Role = require('../models/Role.js');
module.exports= router;


router.get("/",getUsers)

router.post("/",[
    check('email','El correo no es valido').isEmail(),
    check('nombre','El nombre no es valido').not().isEmpty(),
    check('password','La contraseña debe contener minimo 6 caracteres').isLength({min : 6}),
    check('rol').custom(async(rol = '')=>{
    const existeROl = await Role.findOne({rol})
    if (!existeROl) {
        throw new Error (`El rol ${rol} no esta registrado en la base de datos`)
    }
})/* check('rol','EL rol no es valido ').isIn('ADMIN','USER') */,validationDoc],postUsers)

router.delete("/",deleUsers)
router.put("/",addUsers)
router.patch("/",updateUsers)