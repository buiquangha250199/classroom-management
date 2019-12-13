const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

const SinhVien = require('../models/SinhVien.js');
const TimeSlot = require('../models/TimeSlot.js');

class LopMonHoc extends Model {}
LopMonHoc.init({
	IDLop:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	MaLop:{
		type: Sequelize.STRING
	},
	TenMon:{
		type: Sequelize.STRING
	},
	SiSo:{
		type: Sequelize.INTEGER
	},
	GhiChu:{
		type: Sequelize.STRING
	}

},{
	sequelize,
});

LopMonHoc.hasMany(TimeSlot, {foreignKey: 'TinhTrangTimeSlot'});
LopMonHoc.belongsToMany(SinhVien, {through: 'ghidanh', foreignKey: 'IDLop'});
SinhVien.belongsToMany(LopMonHoc, {through: 'ghidanh', foreignKey: 'IDSV'});

module.exports = LopMonHoc;