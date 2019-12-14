const sequelize = require('../config/sequelize.js');

const adminModel = require('../models/admin.js');
const giangvienModel = require('../models/giangvien.js');
const kyhocModel = require('../models/kyhoc.js');
const lopmonhocModel = require('../models/lopmonhoc.js');
const phonghocModel = require('../models/phonghoc.js');
const sinhvienModel = require('../models/sinhvien.js');
const taikhoanModel = require('../models/taikhoan.js');
const timeslotModel = require('../models/timeslot.js');

const database = require('../config/database.js');

module.exports = {
    totalClass: function(req, res, next) {
    	lopmonhocModel.count().then(result =>
    	res.json(result));
    },
    totalRoom: function(req, res, next) {
    	phonghocModel.count().then(result =>
    	res.json(result));
    },
    totalLecturals: function(req, res, next) {
    	giangvienModel.count().then(result =>
    	res.json(result));
    },
    totalStudent: function(req, res, next) {
    	sinhvienModel.count().then(result =>
    	res.json(result));
    },
    activeRoom: function(req, res, next) {
    	phonghocModel.count({where: {TinhTrangPhong: 1}}).then(result =>
    	res.json(result));
    },
    arrangedClass: function(req, res, next) {
    	timeslotModel.count({distinct: true, col: 'TinhTrangTimeSlot'}).then(result =>
    	res.json(result));
    },

    newRoom: function(req, res, next) {
    	phonghocModel.create({
    	TenPhong: req.body.ten, 
    	DiaChi: req.body.diachi, 
    	TinhTrangPhong: req.body.trangthai, 
    	SucChua: req.body.succhua,
    	}).then(result =>res.json(result));
    },
    deleteRoom: function(req, res, next) {
    	phonghocModel.destroy({
			where: {
				IDPhong: req.body.id
			}
		}).then(result =>res.json(result));
    },
    editRoom: function(req, res, next) {
    	phonghocModel.update({
    		TenPhong: req.body.ten, 
	    	DiaChi: req.body.diachi, 
	    	TinhTrangPhong: req.body.trangthai, 
	    	SucChua: req.body.succhua
    	},{	
	    	where: {IDPhong: req.body.id}
    	}).then(result =>res.json(result));
    },

    newClass: function(req, res, next) {
    	lopmonhocModel.create({
    	MaLop: req.body.malop, 
    	TenMon: req.body.tenmon, 
    	GiangVien: req.body.giangvien,
    	KyHoc: req.body.kyhoc,
    	SiSo: req.body.siso,
    	GhiChu: req.body.ghichu
    	}).then(result =>res.json(result));
    },
    deleteClass: function(req, res, next) {
    	lopmonhocModel.destroy({
			where: {
				IDLop: req.body.id
			}
		}).then(result =>res.json(result));
    },
    editClass: function(req, res, next) {
    	lopmonhocModel.update({
    	MaLop: req.body.malop, 
    	TenMon: req.body.tenmon, 
    	GiangVien: req.body.giangvien,
    	KyHoc: req.body.kyhoc,
    	SiSo: req.body.siso,
    	GhiChu: req.body.ghichu
    	},{	
	    	where: {IDLop: req.body.id}
    	}).then(result =>res.json(result));
    },

    roomUseCase: function(req, res, next) {
    	timeslotModel.findAll({
    		where:{
    			Phong: req.body.phong
    		}
    	}).then(result =>res.json(result));
    },
    //TaoTKB
    allClassTime: function(req, res, next) {
        lopmonhocModel.hasMany(timeslotModel, {foreignKey: 'TinhTrangTimeSlot', sourceKey: 'IDLop'});
    	lopmonhocModel.findAll({
    		include:[{
    			model: timeslotModel
    		}]
    	}).then(result =>res.json(result));
    },

    newTimeSlot: function(req, res, next) {
        var i;
        for (i= req.body.tietbd; i<= req.body.tietkt; i++){
            timeslotModel.create({
            KyHoc: req.body.kyhoc,
            Thu: req.body.thu,
            Tiet: i,
            Phong: req.body.phong,
            TinhTrangTimeSlot: req.body.lop
            }).then();
        }
        
    },
    deleteTimeSlot: function(req, res, next) {
        timeslotModel.destroy({
            where: {
            TinhTrangTimeSlot: req.body.lop
            }
        }).then(result =>res.json(result));
    },
    editTimeSlot: function(req, res, next) {
        lopmonhocModel.hasMany(timeslotModel, {foreignKey: 'TinhTrangTimeSlot'});
        timeslotModel.destroy({
            where: {
            TinhTrangTimeSlot: req.body.lop
            }
        }).then();
        var i;
        for (i= req.body.tietbd; i<= req.body.tietkt; i++){
            timeslotModel.create({
            KyHoc: req.body.kyhoc,
            Thu: req.body.thu,
            Tiet: i,
            Phong: req.body.phong,
            TinhTrangTimeSlot: req.body.lop
            }).then();
        }
    }
 

}