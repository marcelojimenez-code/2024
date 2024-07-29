import  { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";


const tipoDocumento = sequelize.define('tipo_documento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    gls_documento: {
        type: DataTypes.TEXT,
        allowNull: false    
    },

},{
    schema:'formulario_denuncias',
    tableName:'tipo_documento',
    timestamps:false
})

export default tipoDocumento