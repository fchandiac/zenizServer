'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Advances extends Model { }
    Advances.init({
        producer_id: { type: DataTypes.INTEGER },
        amount: { type: DataTypes.INTEGER },
        description: { type: DataTypes.TEXT },

    }, {
        sequelize,
        modelName: 'Advances',
        underscored: true

    })
    return Advances
}