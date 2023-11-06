'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class TraysMovements extends Model { }
    TraysMovements.init({
        tray_id: { type: DataTypes.INTEGER },
        producer_id: { type: DataTypes.INTEGER },
        reception_id: { type: DataTypes.INTEGER },
        customer_id: { type: DataTypes.INTEGER },
        dispatch_id: { type: DataTypes.INTEGER },
        quanty: { type: DataTypes.INTEGER },
        type:{ type: DataTypes.INTEGER },
        balance: { type: DataTypes.INTEGER },
        description: { type: DataTypes.TEXT },
        
    }, {
        sequelize,
        modelName: 'traysmovements',
        underscored: true
    })
    return TraysMovements
}