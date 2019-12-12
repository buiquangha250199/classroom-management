const adminModel = require('../models/admin.js');
const giangvienModel = require('../models/giangvien.js');
const kyhocModel = require('../models/kyhoc.js');
const lopmonhocModel = require('../models/lopmonhoc.js');
const phonghocModel = require('../models/phonghoc.js');
const sinhvienModel = require('../models/sinhvien.js');
const taikhoanModel = require('../models/taikhoan.js');
const timeslotModel = require('../models/timeslot.js');

module.exports = {
	testAdmin: function(req, res, next) {
		adminModel.findAll().then(books =>
        res.json(books));
    },
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
    showTimeSlot: function


}