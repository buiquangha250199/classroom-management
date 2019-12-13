const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

const LopMonHoc = require('../models/LopMonHoc.js');

class GiangVien extends Model {}
GiangVien.init({
	IDGV:{
		type: Sequelize.INTEGER,
		primaryKey: true,
	},
	Ten:{
		type: Sequelize.STRING
	},
	NgaySinh:{
		type: Sequelize.DATEONLY
	},
	SDT:{
		type: Sequelize.INTEGER.UNSIGNED.ZEROFILL
	},
	Email:{
		type: Sequelize.STRING,
		validate:{
			isEmail: true
		}
	},
	Khoa:{
		type: Sequelize.STRING
	}
},{
	sequelize,
});

GiangVien.hasMany(LopMonHoc, {foreignKey: 'GiangVien'});

module.exports = GiangVien;