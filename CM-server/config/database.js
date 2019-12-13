const sequelize = require('./sequelize.js');

const TaiKhoan = require('../models/TaiKhoan.js');
const Admin = require('../models/Admin.js');
const GiangVien = require('../models/GiangVien.js');
const SinhVien = require('../models/SinhVien.js');
const LopMonHoc = require('../models/LopMonHoc.js');
const TimeSlot = require('../models/TimeSlot.js');
const KyHoc = require('../models/Kyhoc.js');
const PhongHoc = require('../models/PhongHoc.js');

/*
TaiKhoan.hasOne(Admin, {foreignKey: 'IDAd'});
TaiKhoan.hasOne(GiangVien, {foreignKey: 'IDGV'});
TaiKhoan.hasOne(SinhVien, {foreignKey: 'IDSV'});
LopMonHoc.hasMany(TimeSlot, {foreignKey: 'TinhTrangTimeSlot'});
KyHoc.hasMany(TimeSlot, {foreignKey: 'KyHoc'});
KyHoc.hasMany(LopMonHoc, {foreignKey: 'KyHoc'});
PhongHoc.hasMany(TimeSlot, {foreignKey: 'Phong'});
GiangVien.hasMany(LopMonHoc, {foreignKey: 'GiangVien'});
LopMonHoc.belongsToMany(SinhVien, {through: 'ghidanh', foreignKey: 'IDLop'});
SinhVien.belongsToMany(LopMonHoc, {through: 'ghidanh', foreignKey: 'IDSV'});	
*/

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created here!`)
  });