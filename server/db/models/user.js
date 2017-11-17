const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    isEmail: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  animalPreferences: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  hasYoungChildren: {
    type: Sequelize.BOOLEAN,
    defaultValue: false

  },
  otherPetTypes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  zipCode: {
    type: Sequelize.INTEGER
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  petHistory: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

/**
 * classMethods
 */
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}



User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
User.beforeUpdate((stateObject, options) => {
  let preferences = ['dogs', 'cats', 'birds', 'smallFurries', 'reptiles', 'horses', 'barnyardAnimals']
  let owns = ['dog', 'cat', 'bird', 'smallFurry', 'reptile', 'horse', 'barnyardAnimal']
  const keys = Object.keys(stateObject)
  let filteredKeys = keys.map(key => stateObject[key] === true)

  stateObject.animalPreferences = filteredKeys.filter(key => preferences.indexOf(key) > -1);
  stateObject.otherPetTypes = filteredKeys.filter(key => owns.indexOf(key) > -1)
})
