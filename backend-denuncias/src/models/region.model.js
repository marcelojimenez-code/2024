import  { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

    const Region = sequelize.define('region',   
    {
      id_region: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_region: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },{
    schema:'formulario_denuncias',
    tableName:'region',
    timestamps:false,
})

export default Region;