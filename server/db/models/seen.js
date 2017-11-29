const Sequelize = require('sequelize');
const db = require('../db');

const Seen = db.define('seen', {
  petId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Seen;
