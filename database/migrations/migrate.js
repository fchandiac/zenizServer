'use strict';

const sequelize = require("sequelize");

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
                delete: { type: Sequelize.BOOLEAN, defaultValue: false },
                edit: { type: Sequelize.BOOLEAN, defaultValue: false },
                settlement: { type: Sequelize.BOOLEAN, defaultValue: false },
                new_reception: { type: Sequelize.BOOLEAN, defaultValue: false },
                new_dispatch: { type: Sequelize.BOOLEAN, defaultValue: false },
                close_reception: { type: Sequelize.BOOLEAN, defaultValue: false },
                close_dispatch: { type: Sequelize.BOOLEAN, defaultValue: false },
                advance: { type: Sequelize.BOOLEAN, defaultValue: false },
                

                // reports: { type: Sequelize.BOOLEAN, defaultValue: false },
                // pallets: { type: Sequelize.BOOLEAN, defaultValue: false },
                // trays: { type: Sequelize.BOOLEAN, defaultValue: false },
                // types: { type: Sequelize.BOOLEAN, defaultValue: false },
                // varieties: { type: Sequelize.BOOLEAN, defaultValue: false },
                // producers: { type: Sequelize.BOOLEAN, defaultValue: false },
                // customers: { type: Sequelize.BOOLEAN, defaultValue: false },
                // users: { type: Sequelize.BOOLEAN, defaultValue: false },
                // records: { type: Sequelize.BOOLEAN, defaultValue: false },
                // dispatchs: { type: Sequelize.BOOLEAN, defaultValue: false },
                // receptions: { type: Sequelize.BOOLEAN, defaultValue: false },
                // advances: { type: Sequelize.BOOLEAN, defaultValue: false },
                // customers_accounts: { type: Sequelize.BOOLEAN, defaultValue: false },
                // producers_accounts: { type: Sequelize.BOOLEAN, defaultValue: false },
                // new_reception: { type: Sequelize.BOOLEAN, defaultValue: false },
                // new_dispatch: { type: Sequelize.BOOLEAN, defaultValue: false },
                // settlements: { type: Sequelize.BOOLEAN, defaultValue: false },
                // auth: { type: Sequelize.BOOLEAN, defaultValue: false },



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
                user: { type: Sequelize.STRING, unique: true },
                pass: { type: Sequelize.STRING },
                name: { type: Sequelize.STRING, unique: true },
                mail: { type: Sequelize.STRING },
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
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('customers',
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
                clp: {type: sequelize.INTEGER, defaultValue: 0},
                usd: {type: sequelize.FLOAT, defaultValue: 0},
                money: {type: sequelize.STRING, defaultValue: 'CLP'},
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

        await queryInterface.createTable('dispatchs',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                customer_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'customers',
                        key: 'id'
                    },
                },
                guide: { type: Sequelize.STRING, allowNull: true, defaultValue: ''},
                clp: { type: Sequelize.INTEGER, defaultValue: 0, allowNull: true },
                usd: { type: Sequelize.FLOAT, defaultValue: 0, allowNull: true },
                change: { type: Sequelize.INTEGER, defaultValue: 0, allowNull: true },
                money: { type: Sequelize.STRING, defaultValue: 'CLP' },
                trays_quanty: { type: Sequelize.INTEGER, defaultValue: 0 },
                trays_weight: { type: Sequelize.FLOAT, defaultValue: 0 },
                impurity_weight: { type: Sequelize.FLOAT, defaultValue: 0 },
                gross: { type: Sequelize.FLOAT, defaultValue: 0 },
                net: { type: Sequelize.FLOAT, defaultValue: 0 },
                to_pay: { type: Sequelize.INTEGER, defaultValue: 0 },
                open: { type: Sequelize.BOOLEAN, defaultValue: true },
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
                dispatch_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    defaultValue: null,
                    references: {
                        model: 'dispatchs',
                        key: 'id'
                    }
                },
                trays: { type: Sequelize.INTEGER },
                max: { type: Sequelize.INTEGER },
                weight: { type: Sequelize.FLOAT },
                dispatch_weight: { type: Sequelize.FLOAT, defaultValue: 0 },
                dispatch: { type: Sequelize.BOOLEAN, defaultValue: false },
                //DIFERENCIA ENTRE PESO DE DESPACHO Y PESO DE RECEPCION = 0
                //ESTADO: DESPACHADO, 
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

       
        await queryInterface.createTable('settlements',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            producer_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'producers',
                    key: 'id'
                },
            },
            amount: { type: Sequelize.INTEGER, defaultValue: 0 },
            description: { type: Sequelize.TEXT, defaultValue: '' },
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
                settlement_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'settlements',
                        key: 'id'
                    }, 
                    defaultValue: null
                },
                guide: { type: Sequelize.STRING, allowNull: true},
                clp: { type: Sequelize.INTEGER, defaultValue: 0, allowNull: true },
                usd: { type: Sequelize.FLOAT, defaultValue: 0, allowNull: true },
                change: { type: Sequelize.INTEGER, defaultValue: 0, allowNull: true },
                money: { type: Sequelize.STRING, defaultValue: 'CLP' },
                trays_quanty: { type: Sequelize.INTEGER, defaultValue: 0 },
                trays_weight: { type: Sequelize.FLOAT, defaultValue: 0 },
                impurity_weight: { type: Sequelize.FLOAT, defaultValue: 0 },
                gross: { type: Sequelize.FLOAT, defaultValue: 0 },
                net: { type: Sequelize.FLOAT, defaultValue: 0 },
                to_pay: { type: Sequelize.INTEGER, defaultValue: 0 },
                open: { type: Sequelize.BOOLEAN, defaultValue: true },
                settlement: { type: Sequelize.BOOLEAN, defaultValue: false },

                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('packs',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
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
                quanty: { type: Sequelize.INTEGER },
                trays_weight: { type: Sequelize.FLOAT },
                impurity: { type: Sequelize.INTEGER },
                impurity_weight: { type: Sequelize.FLOAT },
                gross: { type: Sequelize.FLOAT },
                net: { type: Sequelize.FLOAT },



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
                references: {
                    model: 'receptions',
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
            
            quanty: { type: Sequelize.INTEGER },
            type: { type: Sequelize.INTEGER },
            balance: { type: Sequelize.INTEGER },
            description: { type: Sequelize.TEXT, defaultValue: '' },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
        {
            initialAutoIncrement: 1001,
        }
    )


        await queryInterface.createTable('producer_accounts',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                producer_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'producers',
                        key: 'id'
                    },

                },
                credit: { type: Sequelize.INTEGER, defaultValue: 0 },
                debit: { type: Sequelize.INTEGER, defaultValue: 0 },
                balance: { type: Sequelize.INTEGER, defaultValue: 0 },
                reference_id: { type: Sequelize.INTEGER, defaultValue: 0 },
                reference_type: { type: Sequelize.INTEGER, defaultValue: 0 },
                description: { type: Sequelize.TEXT, defaultValue: '' },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('advances',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                producer_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'producers',
                        key: 'id'
                    },

                },
                amount: { type: Sequelize.INTEGER, defaultValue: 0 },
                description: { type: Sequelize.TEXT, defaultValue: '' },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('customer_accounts',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                customer_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'customers',
                        key: 'id'
                    },
                },
                credit: { type: Sequelize.INTEGER, defaultValue: 0 },
                debit: { type: Sequelize.INTEGER, defaultValue: 0 },
                balance: { type: Sequelize.INTEGER, defaultValue: 0 },
                reference_id: { type: Sequelize.INTEGER, defaultValue: 0 },
                reference_type: { type: Sequelize.INTEGER, defaultValue: 0 },
                description: { type: Sequelize.TEXT, defaultValue: '' },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('customer_advances',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            customer_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'customers',
                    key: 'id'
                },

            },
            amount: { type: Sequelize.INTEGER, defaultValue: 0 },
            description: { type: Sequelize.TEXT, defaultValue: '' },
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


