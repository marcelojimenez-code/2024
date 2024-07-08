import  { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";


const Usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rut:{
        type:DataTypes.TEXT,
        allowNull:false,
        unique:true
    },
    correo:{
        type:DataTypes.STRING(100),
        allowNull:true
    },
    usuario_windows:{
        type:DataTypes.STRING(30),
        allowNull:true,
    },
    password:{
        type:DataTypes.STRING(10),
        allowNull:false,

    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

},{
    schema:'formulario_denuncias',
    tableName:'usuarios',
    scopes:{
        eliminarPassword:{
            attributes:{
                exclude:['password','createdAt','updatedAt','usuario_windows']
            }
        }
    }
})

export default Usuarios