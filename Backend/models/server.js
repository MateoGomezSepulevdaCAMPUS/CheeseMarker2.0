const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js')
class Server{
    constructor(){
        this.app= express();
        this.port=process.env.PORT
        this.usuariosPath="/api/usuarios";
        this.authPath="/api/auth";
        //Middlewares
        this.connectDB()
        this.middlewares();
        //Routing
        this.routes();
        //CONECTAR A BASE DE DATOS
       
    }
    async connectDB (){
        await dbConnection();
    }
    middlewares(){
        //Cors
        this.app.use(cors());
        //Leer y parsear un json
        this.app.use(express.json())
        //Public Directory
        this.app.use(express.static('public'))
    }
    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuario.routes.js'));
        this.app.use(this.authPath,require('../routes/auth.routes.js'))
    }
    
    listening(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }
}
module.exports = Server;