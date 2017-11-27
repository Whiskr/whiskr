const Sequelize = require('sequelize');
const db = require('../db');

const Match = db.define('match', {
  petId: {
    type: Sequelize.INTEGER,
  },
  contacted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },

});

module.exports = Match;
