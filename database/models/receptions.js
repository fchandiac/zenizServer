
'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Receptions extends Model { }
    Receptions.init({
        guide: { type: DataTypes.INTEGER },
        price: { type: DataTypes.INTEGER },
        trays_quanty: { type: DataTypes.INTEGER },
        trays_weight: { type: DataTypes.FLOAT },
        gross: { type: DataTypes.FLOAT },
        discount: { type: DataTypes.FLOAT },
        net: { type: DataTypes.FLOAT },
        producer_id: { type: DataTypes.INTEGER },
        variety_id: { type: DataTypes.INTEGER },
        type_id: { type: DataTypes.INTEGER }
    }, {
        sequelize,
        modelName: 'Receptions',
        underscored: true
    })
    return Receptions
}

