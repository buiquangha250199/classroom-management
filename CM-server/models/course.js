const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

class Course extends Model {}
Course.init({
	IDCourse:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	CourseName:{
		type: Sequelize.STRING
	},
	SubjectName:{
		type: Sequelize.STRING
	},
	TotalStudent:{
		type: Sequelize.INTEGER
	},
	Note:{
		type: Sequelize.STRING
	}

},{
	sequelize,
});

module.exports = Course;