'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class settlements extends Model { }
    settlements.init({
        producer_id: { type: DataTypes.INTEGER },
        amount: { type: DataTypes.INTEGER },
        description: { type: DataTypes.TEXT },

    }, {
        sequelize,
        modelName: 'settlements',
        underscored: true

    })
    return settlements

    
}