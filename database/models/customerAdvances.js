'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class CustomersAdvances extends Model { }
    CustomersAdvances.init({
        customer_id: { type: DataTypes.INTEGER },
        amount: { type: DataTypes.INTEGER },
        description: { type: DataTypes.TEXT },

    }, {
        sequelize,
        modelName: 'CustomerAdvances',
        underscored: true

    })
    return CustomersAdvances
}

// import { Model } from 'sequelize';

// export class CustomersAdvances extends Model {}

// export default (sequelize, DataTypes) => {
//     CustomersAdvances.init(
//         {
//             producer_id: { type: DataTypes.INTEGER },
//             amount: { type: DataTypes.INTEGER },
//             description: { type: DataTypes.TEXT },
//         },
//         {
//             sequelize,
//             modelName: 'customerAdvances',
//             underscored: true,
//         }
//     );
//     return CustomersAdvances;
// };