const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

class TimeSlot extends Model {}
TimeSlot.init({
	Thu:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	Tiet:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	KyHoc:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	Phong:{
		type: Sequelize.INTEGER,
		primaryKey: true
	}
}, {
	sequelize,
});

module.exports = TimeSlot;