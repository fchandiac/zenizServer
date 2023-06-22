'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Profiles extends Model { }
    Profiles.init({
        
        name: { type: DataTypes.STRING },
        admin: { type: DataTypes.BOOLEAN, defaultValue: false },

    }, {
        sequelize,
        modelName: 'Profiles',
        underscored: true

    })
    return Profiles
}