const sequelize = require('../config/sequelize.js');

const Account = require('../models/Account.js');
const Admin = require('../models/Admin.js');
const Lecturer = require('../models/Lecturer.js');
const Student = require('../models/Student.js');
const Course = require('../models/Course.js');
const TimeSlot = require('../models/TimeSlot.js');
const Semester = require('../models/Semester.js');
const Room = require('../models/Room.js');

const database = require('../config/database.js');

module.exports = {
    //so phong hoc
    totalRoom: function(req, res, next) {
    	Room.count().then(result =>
    	res.json(result));
    },
    //so lop mon hoc
    totalCourse: function(req, res, next) {
        Course.count().then(result =>
        res.json(result));
    },
    //so giang vien
    totalLecturer: function(req, res, next) {
    	Lecturer.count().then(result =>
    	res.json(result));
    },

    //so sinh vien
    totalStudent: function(req, res, next) {
    	Student.count().then(result =>
    	res.json(result));
    },

    //danh sach phong
    allRoom: function(req, res, next) {
        Room.findAll().then(result =>
        res.json(result));
    },

    //danh sach giang vien
    allLecturer: function(req, res, next) {
        Lecturer.findAll().then(result =>
        res.json(result));
    },

    //danh sach lop mon hoc
    allCourse: function(req, res, next) {
        Course.findAll().then(result =>
        res.json(result));
    },

    //them xoa sua lop mon hoc
    newCourse: function(req, res, next) {
        Course.create({
        CourseName: req.body.malop, 
        SubjectName: req.body.tenmon, 
        Lecturer: req.body.giangvien,
        Semester: req.body.kyhoc,
        TotalStudent: req.body.siso,
        Note: req.body.ghichu
        }).then(result =>res.json(result));
    },
    deleteCourse: function(req, res, next) {
        Course.destroy({
            where: {
                IDCourse: req.body.id
            }
        }).then(result =>res.json(result));
    },
    editCourse: function(req, res, next) {
        Course.update({
        CourseName: req.body.malop, 
        SubjectName: req.body.tenmon, 
        Lecturer: req.body.giangvien,
        Semester: req.body.kyhoc,
        TotalStudent: req.body.siso,
        Note: req.body.ghichu
        },{ 
            where: {IDCourse: req.body.id}
        }).then(result =>res.json(result));
    },

    // them xoa sua phong hoc
    newRoom: function(req, res, next) {
    	Room.create({
    	RoomName: req.body.ten, 
    	Address: req.body.diachi, 
    	InUse: req.body.trangthai, 
    	Capacity: req.body.succhua
    	}).then(result =>res.json(result));
    },
    deleteRoom: function(req, res, next) {
    	Room.destroy({
			where: {
				IDRoom: req.body.id
			}
		}).then(result =>res.json(result));
    },
    editRoom: function(req, res, next) {
    	Room.update({
    		RoomName: req.body.ten, 
            Address: req.body.diachi, 
            InUse: req.body.trangthai, 
            Capacity: req.body.succhua
    	},{	
	    	where: {IDRoom: req.body.id}
    	}).then(result =>res.json(result));
    },

    // timeslot cua phong
    roomUseCase: function(req, res, next) {
    	TimeSlot.findAll({
    		where:{
    			IDRoom: req.body.phong
    		}
    	}).then(result =>res.json(result));
    },
    
    // danh sach lop mon hoc va time slot cua no(tao tkb)
    allCourseTime: function(req, res, next) {
        Course.hasMany(TimeSlot, {foreignKey: 'IDCourse', sourceKey: 'IDCourse'});
    	Course.findAll({
    		include:[{
    			model: TimeSlot
    		}]
    	}).then(result =>res.json(result));
    },

    //them, xoa, sua timeslot
    newTimeSlot: function(req, res, next) {
        var i;
        for (i= req.body.tietbd; i<= req.body.tietkt; i++){
            TimeSlot.create({
            IDSemester: req.body.kyhoc,
            Day: req.body.thu,
            Period: i,
            IDRoom: req.body.phong,
            IDCourse: req.body.lop
            }).then();
        }
        
    },
    deleteTimeSlot: function(req, res, next) {
        TimeSlot.destroy({
            where: {
            IDCourse: req.body.lop
            }
        }).then(result =>res.json(result));
    },
    editTimeSlot: function(req, res, next) {
        Course.hasMany(TimeSlot, {foreignKey: 'TinhTrangTimeSlot'});
        TimeSlot.destroy({
            where: {
            IDCourse: req.body.lop
            }
        }).then();
        var i;
        for (i= req.body.tietbd; i<= req.body.tietkt; i++){
            TimeSlot.create({
            IDSemester: req.body.kyhoc,
            Day: req.body.thu,
            Period: i,
            IDRoom: req.body.phong,
            IDCourse: req.body.lop
            }).then();
        }
    }
 

}