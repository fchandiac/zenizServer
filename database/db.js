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
db.ReceptionsDetails = require('./models/receptionsDetails')(db.connection, DataTypes)


db.Users.belongsTo(db.Profiles)
db.Records.belongsTo(db.Users)
db.Pallets.belongsTo(db.Varieties)
db.Pallets.belongsTo(db.Trays)
db.Pallets.belongsTo(db.Storages)
db.Pallets.hasMany(db.ReceptionsDetails)
db.TraysMovements.belongsTo(db.Producers)
db.TraysMovements.belongsTo(db.Trays)
db.Receptions.belongsTo(db.Varieties)
db.Receptions.belongsTo(db.Producers)
db.ReceptionsDetails.belongsTo(db.Receptions)
db.ReceptionsDetails.belongsTo(db.Trays)
db.ReceptionsDetails.belongsTo(db.Pallets)


module.exports = db
