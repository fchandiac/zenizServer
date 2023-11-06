'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Varieties extends Model { }
    Varieties.init({
        name: { type: DataTypes.STRING },
        clp: { type: DataTypes.INTEGER },
        usd: { type: DataTypes.FLOAT },
        money: { type: DataTypes.STRING },
    }, {
        sequelize,
        modelName: 'Varieties',
        underscored: true

    })
    return Varieties
}