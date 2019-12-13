const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

const TimeSlot = require('../models/TimeSlot.js');

class PhongHoc extends Model {}
PhongHoc.init({
	IDPhong:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	TenPhong:{
		type: Sequelize.STRING
	},
	DiaChi:{
		type: Sequelize.STRING
	},
	TinhTrangPhong:{
		type: Sequelize.INTEGER //0: Baotri 1: Sudung
	},
	SucChua:{
		type: Sequelize.INTEGER
	}
},{
	sequelize,
});

module.exports = PhongHoc;