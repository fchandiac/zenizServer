'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Trays extends Model { }
    Trays.init({
        name: { type: DataTypes.STRING },
        weight: { type: DataTypes.FLOAT },
        stock: { type: DataTypes.INTEGER },
    }, {
        sequelize,
        modelName: 'Trays',
        underscored: true

    })
    return Trays
}