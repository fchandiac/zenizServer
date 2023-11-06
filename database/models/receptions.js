
'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Receptions extends Model { }
    Receptions.init({
        producer_id: { type: DataTypes.INTEGER },
        variety_id: { type: DataTypes.INTEGER },
        type_id: { type: DataTypes.INTEGER },
        settlement_id: { type: DataTypes.INTEGER },
        guide: { type: DataTypes.INTEGER },
        clp: { type: DataTypes.FLOAT },
        usd: { type: DataTypes.FLOAT },
        change: { type: DataTypes.INTEGER },
        money: { type: DataTypes.STRING },
        trays_quanty: { type: DataTypes.INTEGER },
        trays_weight: { type: DataTypes.FLOAT },
        impurity_weight: { type: DataTypes.FLOAT },
        gross: { type: DataTypes.FLOAT },
        net: { type: DataTypes.FLOAT },
        original_net: { type: DataTypes.FLOAT },
        to_pay: { type: DataTypes.FLOAT },
        open: { type: DataTypes.BOOLEAN },
        settlement: { type: DataTypes.BOOLEAN },
        

    }, {
        sequelize,
        modelName: 'Receptions',
        underscored: true
    })
    return Receptions
}

