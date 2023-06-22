'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class ReceptionsDetails extends Model { }
    ReceptionsDetails.init({
        trays_quanty: { type: DataTypes.INTEGER },
        trays_weight: { type: DataTypes.FLOAT },
        impurity: { type: DataTypes.INTEGER },
        kg_impurity: { type: DataTypes.FLOAT },
        gross: { type: DataTypes.FLOAT },
        discount: { type: DataTypes.FLOAT },
        net: { type: DataTypes.FLOAT },
        pay: { type: DataTypes.INTEGER },
        pallet_id: { type: DataTypes.INTEGER, },
        tray_id: { type: DataTypes.INTEGER },
        reception_id: { type: DataTypes.INTEGER }

    }, {
        sequelize,
        modelName: 'Receptionsdetails',
        underscored: true

    })
    return ReceptionsDetails
}