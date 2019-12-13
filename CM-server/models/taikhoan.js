const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

const Admin = require('../models/Admin.js');
const GiangVien = require('../models/GiangVien.js');
const SinhVien = require('../models/SinhVien.js');

class TaiKhoan extends Model {}
TaiKhoan.init({
	ID:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	Password:{
		type: Sequelize.STRING
	},
	LoaiTK:{
		type: Sequelize.INTEGER //0: admin, 1: giangvien, 2: sinhvien
	}
},{
	sequelize
});

TaiKhoan.hasOne(Admin, {foreignKey: 'IDAd'});
TaiKhoan.hasOne(GiangVien, {foreignKey: 'IDGV'});
TaiKhoan.hasOne(SinhVien, {foreignKey: 'IDSV'});

module.exports = TaiKhoan;