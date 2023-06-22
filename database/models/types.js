'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Types extends Model { }
    Types.init({

        name: { type: DataTypes.STRING },


    }, {
        sequelize,
        modelName: 'Types',
        underscored: true

    })
    return Types
}