const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbConfig = require("../config/db.config.js");

const db = {};
db.url = dbConfig.URI;
db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.updates = require("./updates.model.js")(mongoose);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;