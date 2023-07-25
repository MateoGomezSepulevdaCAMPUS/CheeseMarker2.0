
const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controllers.js');
const { validationDoc } = require('../middlewares/validate.documents.js');
const router = new Router();

router.post("/login",[
    check('email','Email is required').isEmail(),
    check('password','password is required').not().isEmpty(),
    validationDoc
], login)

module.exports = router;