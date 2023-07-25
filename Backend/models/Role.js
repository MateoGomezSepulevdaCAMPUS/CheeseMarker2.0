const{Schema, model}= require('mongoose');

const RolShecma = Schema({
    rol:{
        type:String,
        required: true
    }
});

module.exports = model('Role',RolShecma)