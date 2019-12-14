const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');


class Account extends Model {}
Account.init({
	ID:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	Password:{
		type: Sequelize.STRING
	},
	Type:{
		type: Sequelize.INTEGER //0: admin, 1: giangvien, 2: sinhvien
	}
},{
	sequelize
});

module.exports = Account;