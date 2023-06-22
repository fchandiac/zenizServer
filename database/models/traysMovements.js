'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class TraysMovements extends Model { }
    TraysMovements.init({
        quanty: { type: DataTypes.INTEGER },
        type:{ type: DataTypes.INTEGER },
        producer_id: { type: DataTypes.INTEGER },
        stock_balance: { type: DataTypes.INTEGER },
        tray_id: { type: DataTypes.INTEGER },
    }, {
        sequelize,
        modelName: 'traysmovements',
        underscored: true
    })
    return TraysMovements
}