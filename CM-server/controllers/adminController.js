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

const importCSV = require('./importCSV.js');

module.exports = {
    //so phong hoc
    totalRoom: function(req, res, next) {
    	Room.count()
        .then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },
    //so lop mon hoc
    totalCourse: function(req, res, next) {
        Course.count().then(result =>
        res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },
    //so giang vien
    totalLecturer: function(req, res, next) {
    	Lecturer.count().then(result =>
    	res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },

    //so sinh vien
    totalStudent: function(req, res, next) {
    	Student.count().then(result =>
    	res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },

    //danh sach phong
    allRoom: function(req, res, next) {
        Room.findAll().then(result =>
        res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },

    allSemester: function(req, res, next) {
        Semester.findAll().then(result =>
        res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },

    //danh sach giang vien
    allLecturer: function(req, res, next) {
        Lecturer.findAll().then(result =>
        res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },

    //danh sach lop mon hoc
    allCourse: function(req, res, next) {
        Course.belongsTo(Semester, {foreignKey: 'IDSemester'});
        Course.belongsTo(Lecturer, {foreignKey: 'IDLecturer'});
        Course.findAll({
            include: [
                {
                    model: Semester,                 
                    attributes: ['SemesterName']
                },
                {
                    model: Lecturer,
                    attributes: ['Name']
                }
            ]
            }).then(result =>
        res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },

    //them xoa sua lop mon hoc
    newCourse: function(req, res, next) {
        Course.create({
        CourseName: req.body.CourseName, 
        SubjectName: req.body.SubjectName, 
        Lecturer: req.body.Lecturer,
        Semester: req.body.Semester,
        TotalStudent: req.body.TotalStudent,
        Note: req.body.Note
        }).then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },
    deleteCourse: function(req, res, next) {
        Course.destroy({
            where: {
                IDCourse: req.body.id
            }
        }).then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
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
        }).then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },

    // them xoa sua phong hoc
    newRoom: function(req, res, next) {
    	Room.create({
    	RoomName: req.body.ten, 
    	Address: req.body.diachi, 
    	InUse: req.body.trangthai, 
    	Capacity: req.body.succhua
    	}).then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },
    deleteRoom: function(req, res, next) {
    	Room.destroy({
			where: {
				IDRoom: req.body.id
			}
		}).then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        }); 
    },
    editRoom: function(req, res, next) {
    	Room.update({
    		RoomName: req.body.ten, 
            Address: req.body.diachi, 
            InUse: req.body.trangthai, 
            Capacity: req.body.succhua
    	},{	
	    	where: {IDRoom: req.body.id}
    	}).then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },

    // timeslot cua phong
    roomUseCase: function(req, res, next) {
    	TimeSlot.findAll({
    		where:{
    			IDRoom: req.body.phong
    		}
    	}).then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },
    
    // danh sach lop mon hoc va time slot cua no(tao tkb)
    allCourseTime: function(req, res, next) {
        Course.belongsTo(Semester, {foreignKey: 'IDSemester'});
        Course.belongsTo(Lecturer, {foreignKey: 'IDLecturer'});
        Course.hasMany(TimeSlot, {foreignKey: 'IDCourse', sourceKey: 'IDCourse'});
    	Course.findAll({
    		include:[
            {
    			model: TimeSlot
    		},
            {
                model: Semester,                 
                attributes: ['SemesterName']
            },
            {
                model: Lecturer,
                attributes: ['Name']
            }
            ]
    	}).then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },

    //them, xoa, sua timeslot
    newTimeSlot: function(req, res, next) {
        Course.hasMany(TimeSlot, {foreignKey: 'TinhTrangTimeSlot'});
        var i;
        for (i= req.body.tietbd; i<= req.body.tietkt; i++){
            TimeSlot.create({
            IDSemester: req.body.kyhoc,
            Day: req.body.thu,
            Period: i,
            IDRoom: req.body.phong,
            IDCourse: req.body.lop
            }).then()
            .catch(function (err) {
            // handle error;
            res.send(err.message);
            });
        }
        res.send('success');
    },
    deleteTimeSlot: function(req, res, next) {
        Course.hasMany(TimeSlot, {foreignKey: 'TinhTrangTimeSlot'});
        TimeSlot.destroy({
            where: {
            IDCourse: req.body.lop
            }
        }).then(result =>res.json(result))
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
    },
    editTimeSlot: function(req, res, next) {
        Course.hasMany(TimeSlot, {foreignKey: 'TinhTrangTimeSlot'});
        TimeSlot.destroy({
            where: {
            IDCourse: req.body.lop
            }
        }).then()
        .catch(function (err) {
        // handle error;
        res.send(err.message);
        });
        var i;
        for (i= req.body.tietbd; i<= req.body.tietkt; i++){
            TimeSlot.create({
            IDSemester: req.body.kyhoc,
            Day: req.body.thu,
            Period: i,
            IDRoom: req.body.phong,
            IDCourse: req.body.lop
            }).then()
            .catch(function (err) {
            // handle error;
            res.send(err.message);
            });
        }
        res.send('success');
    },

    importFromCSV: function(req, res, next) {
        //(xac dinh model chon, xac dinh file chon)
        importCSV(req.body.model, req.file.path);
        res.send('success');
    }


    
}