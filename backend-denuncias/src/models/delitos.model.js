import  { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";
import Region from "./region.model.js";


const Delitos = sequelize.define('delitos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cod_delito: {
        type: DataTypes.INTEGER
    },
    delito: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    vigencia: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },  

},{
    schema:'formulario_denuncias',
    tableName:'delitos',
    timestamps:false
})

export default Delitos