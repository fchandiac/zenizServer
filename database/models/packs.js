'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Packs extends Model { }
    Packs.init({
        pallet_id: { type: DataTypes.INTEGER },
        tray_id: { type: DataTypes.INTEGER }, 
        reception_id: {type: DataTypes.INTEGER},
        quanty: { type: DataTypes.INTEGER },
        trays_weight: { type:DataTypes.FLOAT },
        impurity: { type: DataTypes.INTEGER },
        impurity_weight:  { type: DataTypes.FLOAT },
        gross:  { type: DataTypes.FLOAT },
        net:  { type: DataTypes.FLOAT },

    }, {
        sequelize,
        modelName: 'Packs',
        underscored: true

    })
    return Packs
}