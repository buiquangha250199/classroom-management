const Sequelize = require('sequelize');
// const {DATABASE_NAME,USERNAME,PASSWORD,HOST,PORT,DIALECT} = require('./constants');
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // default model option
  define: {
  	charset: 'utf8',
    collate: 'utf8_general_ci', 
	timestamps: false,
	freezeTableName: true

  }
});

module.exports = sequelize;