const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

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

module.exports = KyHoc;