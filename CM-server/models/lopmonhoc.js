const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

const GiangVien = require('../models/GiangVien.js');
const SinhVien = require('../models/SinhVien.js');
const KyHoc = require('../models/Kyhoc.js');
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

KyHoc.hasMany(LopMonHoc, {foreignKey: 'KyHoc', sourceKey: 'IDKyHoc'});
GiangVien.hasMany(LopMonHoc, {foreignKey: 'GiangVien', sourceKey: 'IDGV'});
LopMonHoc.belongsToMany(SinhVien, {through: 'ghidanh', foreignKey: 'IDLop'});
SinhVien.belongsToMany(LopMonHoc, {through: 'ghidanh', foreignKey: 'IDSV'});

module.exports = LopMonHoc;