'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Customers extends Model { }
    Customers.init({

        rut: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        phone: { type: DataTypes.STRING },
        mail: { type: DataTypes.STRING },
        address: { type: DataTypes.STRING }

    }, {
        sequelize,
        modelName: 'Customers',
        underscored: true

    })
    return Customers
}