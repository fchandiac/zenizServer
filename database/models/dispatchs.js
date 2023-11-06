
'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Dispatchs extends Model { }
    Dispatchs.init({
        customer_id: { type: DataTypes.INTEGER },
        guide: { type: DataTypes.INTEGER },
        clp: { type: DataTypes.FLOAT },
        usd: { type: DataTypes.FLOAT },
        change: { type: DataTypes.INTEGER },
        money: { type: DataTypes.STRING },
        pallets_quanty: { type: DataTypes.INTEGER },
        pallets_weight: { type: DataTypes.FLOAT },
        impurity_weight: { type: DataTypes.FLOAT },
        gross: { type: DataTypes.FLOAT },
        net: { type: DataTypes.FLOAT },
        to_pay: { type: DataTypes.FLOAT },
        open: { type: DataTypes.BOOLEAN },
        
        
    }, {
        sequelize,
        modelName: 'Dispatchs',
        underscored: true
    })
    return Dispatchs
}

