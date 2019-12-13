const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');


class Admin extends Model {}
Admin.init({
	IDAd:{
		type: Sequelize.INTEGER,
		primaryKey:true,
	},
	Ten:{
		type: Sequelize.STRING
	},
	SDT:{
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