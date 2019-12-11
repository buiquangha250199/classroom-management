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
    }

}