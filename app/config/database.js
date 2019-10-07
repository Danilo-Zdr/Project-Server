var env = require('./env');

var Sequelize = require('sequelize');
var sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.matches = require('../models/Match.model')(sequelize, Sequelize);
db.teams = require('../models/Team.model')(sequelize, Sequelize);
db.types = require('../models/Type.model')(sequelize, Sequelize);
db.scorelines = require('../models/Scoreline.model')(sequelize, Sequelize);


module.exports = db;