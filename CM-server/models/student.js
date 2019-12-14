const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

class Student extends Model {}
Student.init({
	IDStudent:{
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
	Class:{
		type: Sequelize.STRING
	}
},{
	sequelize,
});

module.exports = Student;