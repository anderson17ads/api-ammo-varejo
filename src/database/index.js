const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api-ammo-varejo', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;