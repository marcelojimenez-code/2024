import {exit} from 'node:process'
import comunas from './comunas.js'
import {Comunas} from '../models/index.js'
import db from '../config/db.config.js'


const importarDatos = async()=>{

    
    await db.authenticate()
    await db.sync()

    await Comunas.bulkCreate(comunas)

    

    console.log('Datos importados')

    exit()
}


const eliminarDatos = async()=>{
    try {
        await db.drop()
    } catch (error) {
        console.log(error)
        
    }
}

if(process.argv[2] === "-i"){
    importarDatos()
}

if(process.argv[2]==="-e"){
    eliminarDatos
}