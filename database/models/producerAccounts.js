'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class ProducerAccounts extends Model { }
    ProducerAccounts.init({
        producer_id: { type: DataTypes.INTEGER },
        credit: { type: DataTypes.INTEGER },
        debit: { type: DataTypes.INTEGER },
        balance: { type: DataTypes.INTEGER },
        reference_id: { type: DataTypes.INTEGER },
        reference_type: { type: DataTypes.INTEGER },
        description: { type: DataTypes.TEXT },




    }, {
        sequelize,
        modelName: 'ProducerAccounts',
        underscored: true

    })
    return ProducerAccounts
}