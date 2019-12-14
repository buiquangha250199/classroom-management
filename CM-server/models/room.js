const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

class Room extends Model {}
Room.init({
	IDRoom:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	RoomName:{
		type: Sequelize.STRING
	},
	Address:{
		type: Sequelize.STRING
	},
	InUse:{
		type: Sequelize.STRING
	},
	Capacity:{
		type: Sequelize.INTEGER
	}
},{
	sequelize,
});

module.exports = Room;