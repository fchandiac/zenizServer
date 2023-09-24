'use strict';
const { Model } = require('sequelize')

// name: { type: Sequelize.STRING },
//                 delete: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 edit: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 settlement: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 new_reception: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 new_dispatch: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 close_reception: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 close_dispatch: { type: Sequelize.BOOLEAN, defaultValue: false },
//                 advance: { type: Sequelize.BOOLEAN, defaultValue: false },


module.exports = (sequelize, DataTypes) => {
    class Profiles extends Model { }
    Profiles.init({
        name: DataTypes.STRING,
        delete: DataTypes.BOOLEAN,
        edit: DataTypes.BOOLEAN,
        settlement: DataTypes.BOOLEAN,
        new_reception: DataTypes.BOOLEAN,
        new_dispatch: DataTypes.BOOLEAN,
        close_reception: DataTypes.BOOLEAN,
        close_dispatch: DataTypes.BOOLEAN,
        advance: DataTypes.BOOLEAN,
        users: DataTypes.BOOLEAN




    }, {
        sequelize,
        modelName: 'Profiles',
        underscored: true

    })
    return Profiles
}