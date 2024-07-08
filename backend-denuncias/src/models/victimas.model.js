import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Victima = sequelize.define('victimas', {
  nacionalidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identificacion: {
    type: DataTypes.STRING,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido_paterno: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'apellido_paterno', // Nombre del campo en la base de datos
  },
  apellido_materno: {
    type: DataTypes.STRING,
    field: 'apellido_materno',
  },
  telefono: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  avenida_calle: {
    type: DataTypes.STRING,
    field: 'avenida_calle',
  },
  block_depto: {
    type: DataTypes.STRING,
    field: 'block_depto',
  },
  villa_poblacion: {
    type: DataTypes.STRING,
    field: 'villa_poblacion',
  },
  comuna: {
    type: DataTypes.STRING,
  },
  region: {
    type: DataTypes.STRING,
  },
},{
    schema:'formulario_denuncias',
    tableName:'victimas',
    timestamps:false,
})

export default Victima;
