const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');


class Admin extends Model {}
Admin.init({
	IDAdmin:{
		type: Sequelize.INTEGER,
		primaryKey:true,
	},
	Name:{
		type: Sequelize.STRING
	},
	Phone:{
		type: Sequelize.INTEGER.UNSIGNED.ZEROFILL
	},
	Email:{
		type: Sequelize.STRING,
		validate:{
			isEmail: true
		}
	}
},{
	sequelize
});

module.exports = Admin;