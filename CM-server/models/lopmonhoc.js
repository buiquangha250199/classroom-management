const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = require('../config/sequelize.js');

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

module.exports = LopMonHoc;