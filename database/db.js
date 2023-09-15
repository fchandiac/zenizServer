const {Sequelize, DataTypes} = require('sequelize');

const db = {};

// db.connection = new Sequelize(process.env.JOVEN_DB,process.env.JOVEN_DB_USER,process.env.JOVEN_DB_PASS, {host: 'localhost', dialect: "mysql"})

db.connection = new Sequelize('zeniz','root','Fenasantma', {host: 'localhost', dialect: "mysql"})

db.Profiles = require('./models/profiles')(db.connection, DataTypes)
db.Users = require('./models/users')(db.connection, DataTypes)
db.Producers = require('./models/producers')(db.connection, DataTypes)
db.Records = require('./models/records')(db.connection, DataTypes)
db.Varieties = require('./models/varieties')(db.connection, DataTypes)
db.Types = require('./models/types')(db.connection, DataTypes)
db.Trays = require('./models/trays')(db.connection, DataTypes)
db.Pallets = require('./models/pallets')(db.connection, DataTypes)
db.Storages = require('./models/storages')(db.connection, DataTypes)
db.TraysMovements = require('./models/traysMovements')(db.connection, DataTypes)
db.Receptions = require('./models/receptions')(db.connection, DataTypes)
db.Packs = require('./models/packs')(db.connection, DataTypes)
db.ProducerAccounts = require('./models/producerAccounts')(db.connection, DataTypes)
db.Advances = require('./models/advances')(db.connection, DataTypes)
db.Customers = require('./models/customers')(db.connection, DataTypes)
db.CustomerAccounts = require('./models/customerAccounts')(db.connection, DataTypes)
db.Dispatchs = require('./models/dispatchs')(db.connection, DataTypes)
db.Settlements = require('./models/settlements')(db.connection, DataTypes)


db.Users.belongsTo(db.Profiles)
db.Records.belongsTo(db.Users)


db.Pallets.belongsTo(db.Trays)
db.Pallets.belongsTo(db.Storages)
db.Pallets.hasMany(db.Packs)

db.TraysMovements.belongsTo(db.Producers)
db.TraysMovements.belongsTo(db.Trays)

db.Receptions.belongsTo(db.Varieties)
db.Receptions.belongsTo(db.Producers)
db.Receptions.belongsTo(db.Types)
db.Receptions.hasMany(db.Packs)
db.Receptions.hasMany(db.TraysMovements)


db.Producers.hasMany(db.ProducerAccounts)

db.Customers.hasMany(db.CustomerAccounts)

db.Dispatchs.hasMany(db.Pallets)
db.Dispatchs.belongsTo(db.Customers)
//db.ProducerAccounts.belongsTo(db.Producers)


db.Packs.belongsTo(db.Receptions)
db.Packs.belongsTo(db.Trays)
db.Packs.belongsTo(db.Pallets)


db.Settlements.belongsTo(db.Producers)
db.Settlements.hasMany(db.Receptions)

db.Advances.belongsTo(db.Producers)

db.Records.belongsTo(db.Users)


module.exports = db
