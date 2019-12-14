const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

class Lecturer extends Model {}
Lecturer.init({
	IDLecturer:{
		type: Sequelize.INTEGER,
		primaryKey: true,
	},
	Name:{
		type: Sequelize.STRING
	},
	DoB:{
		type: Sequelize.DATEONLY
	},
	Phone:{
		type: Sequelize.INTEGER.UNSIGNED.ZEROFILL
	},
	Email:{
		type: Sequelize.STRING,
		validate:{
			isEmail: true
		}
	},
	Faculty:{
		type: Sequelize.STRING
	}
},{
	sequelize,
});

module.exports = Lecturer;