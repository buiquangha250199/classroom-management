const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

const LopMonHoc = require('../models/LopMonHoc.js');
const TimeSlot = require('../models/TimeSlot.js');

class KyHoc extends Model {}
KyHoc.init({
	IDKyHoc:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	TenKyHoc:{
		type: Sequelize.STRING
	},
	ThoiGianBatDau:{
		type: Sequelize.DATEONLY
	},
	ThoiGianKetThuc:{
		type: Sequelize.DATEONLY
	},
}, {
	sequelize,
});

KyHoc.hasMany(TimeSlot, {foreignKey: 'KyHoc'});
KyHoc.hasMany(LopMonHoc, {foreignKey: 'KyHoc'});

module.exports = KyHoc;