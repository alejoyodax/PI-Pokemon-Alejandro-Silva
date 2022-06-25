const { get } = require('express/lib/response');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,  // EMPIEZA DESDE EL ID=1 Y VA INCREMENTANDO
      primaryKey: true,
    },

    id2: {
      type: DataTypes.STRING,
      allowNull: true,

    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    fuerza: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },

    {
      timestamps: false
    }
  );
};
