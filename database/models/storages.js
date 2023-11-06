'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Storages extends Model { }
    Storages.init({


        name: { type: DataTypes.STRING },



    }, {
        sequelize,
        modelName: 'Storages',
        underscored: true

    })
    return Storages
}