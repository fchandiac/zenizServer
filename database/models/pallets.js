'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Pallets extends Model { }
    Pallets.init({

        trays: { type: DataTypes.INTEGER  },
        max: { type: DataTypes.INTEGER, defaultValue: 240 },
        weight: { type: DataTypes.FLOAT },
        variety_id: { type: DataTypes.INTEGER },
        tray_id: { type: DataTypes.INTEGER },
        storage_id: { type: DataTypes.INTEGER },

        

    }, {
        sequelize,
        modelName: 'Pallets',
        underscored: true

    })
    return Pallets
}