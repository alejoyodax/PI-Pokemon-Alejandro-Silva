const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('tipo', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },

        idPokeApi: {
            type: DataTypes.INTEGER,
            autoIncrement: true,        // ESTO NO DA PROBLEMAS, ESXCEPTO SI QUIERO AGREGAR UN NUEVO VALOR SIN ESTE DATO
            primaryKey: true,
        },

        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
        {
            timestamps: false
        }


    );
};
