const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

const LopMonHoc = require('../models/LopMonHoc.js');
const KyHoc = require('../models/Kyhoc.js');
const PhongHoc = require('../models/PhongHoc.js');


class TimeSlot extends Model {}
TimeSlot.init({
	Thu:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	Tiet:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	KyHoc:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	Phong:{
		type: Sequelize.INTEGER,
		primaryKey: true
	}
}, {
	sequelize,
});

LopMonHoc.hasMany(TimeSlot, {foreignKey: 'TinhTrangTimeSlot', sourceKey: 'IDLop'});
KyHoc.hasMany(TimeSlot, {foreignKey: 'KyHoc', sourceKey: 'IDKyHoc'});
PhongHoc.hasMany(TimeSlot, {foreignKey: 'Phong', sourceKey: 'IDPhong'});

module.exports = TimeSlot;