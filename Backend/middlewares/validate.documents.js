const {validationResult} = require('express-validator');

const validationDoc = (req,res,next)=>{
    const errors= validationResult(req);
      
    if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json(errors)
                       
    }
    next();
}

module.exports ={
    validationDoc
}