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
    	res
    }



}