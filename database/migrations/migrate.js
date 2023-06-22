'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('profiles',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING },
                admin: { type: Sequelize.BOOLEAN },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('users',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                user: { type: Sequelize.STRING, unique: true },
                pass: { type: Sequelize.STRING },
                name: { type: Sequelize.STRING, unique: true },
                mail: { type: Sequelize.STRING },
                profile_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'profiles',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('records',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                table: { type: Sequelize.STRING },
                action: { type: Sequelize.STRING },
                description: { type: Sequelize.STRING },
                user_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'users',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('producers',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                rut: { type: Sequelize.STRING, unique: true },
                name: { type: Sequelize.STRING, unique: true },
                phone: { type: Sequelize.STRING },
                mail: { type: Sequelize.STRING },
                address: { type: Sequelize.STRING },
                type: { type: Sequelize.INTEGER },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('varieties',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                price: { type: Sequelize.INTEGER },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('types',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('trays',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                weight: { type: Sequelize.FLOAT },
                stock: { type: Sequelize.INTEGER },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('storages',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('pallets',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                trays: { type: Sequelize.INTEGER },
                max: { type: Sequelize.INTEGER },
                weight: { type: Sequelize.FLOAT },
                tray_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'trays',
                        key: 'id'
                    }
                },
                variety_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'varieties',
                        key: 'id'
                    }
                },
                storage_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'storages',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('traysmovements',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                quanty: { type: Sequelize.INTEGER },
                type: { type: Sequelize.INTEGER },
                stock_balance: { type: Sequelize.INTEGER },
                tray_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'trays',
                        key: 'id'
                    }
                },
                producer_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'producers',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('receptions',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                guide:{ type: Sequelize.INTEGER },
                price: { type: Sequelize.INTEGER },
                trays_quanty: { type: Sequelize.INTEGER },
                trays_weight: { type: Sequelize.FLOAT },
                gross: { type: Sequelize.FLOAT },
                discount: { type: Sequelize.FLOAT },
                net: { type: Sequelize.FLOAT },
                producer_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'producers',
                        key: 'id'
                    }
                },
                variety_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'varieties',
                        key: 'id'
                    }
                },
                type_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'types',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('receptionsdetails',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                trays_quanty: { type: Sequelize.INTEGER },
                trays_weight: { type: Sequelize.FLOAT },
                impurity: { type: Sequelize.INTEGER },
                kg_impurity:  { type: Sequelize.FLOAT },
                gross:  { type: Sequelize.FLOAT },
                discount:  { type: Sequelize.FLOAT },
                net:  { type: Sequelize.FLOAT },
                pay:  { type: Sequelize.INTEGER },
                pallet_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'pallets',
                        key: 'id'
                    }
                },
                tray_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'trays',
                        key: 'id'
                    }
                }, 
                reception_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'receptions',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropAllTables()
    }
};


