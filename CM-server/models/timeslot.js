const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

class TimeSlot extends Model {}
TimeSlot.init({
	Day:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	Period:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	IDSemester:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	IDRoom:{
		type: Sequelize.INTEGER,
		primaryKey: true
	}
}, {
	sequelize,
});

module.exports = TimeSlot;