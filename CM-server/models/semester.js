const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

class Semester extends Model {}
Semester.init({
	IDSemester:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	SemesterName:{
		type: Sequelize.STRING
	},
	StartDate:{
		type: Sequelize.DATEONLY
	},
	EndDate:{
		type: Sequelize.DATEONLY
	},
}, {
	sequelize,
});

module.exports = Semester;