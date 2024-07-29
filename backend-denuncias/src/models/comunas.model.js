import  { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

    const Comunas = sequelize.define('comunas',   
    {
      id_comuna: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_comuna: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },{
    schema:'formulario_denuncias',
    tableName:'comunas',
    timestamps:false,
})

export default Comunas;
