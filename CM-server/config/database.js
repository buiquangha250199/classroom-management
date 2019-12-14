const sequelize = require('./sequelize.js');

const Account = require('../models/Account.js');
const Admin = require('../models/Admin.js');
const Lecturer = require('../models/Lecturer.js');
const Student = require('../models/Student.js');
const Course = require('../models/Course.js');
const TimeSlot = require('../models/TimeSlot.js');
const Semester = require('../models/Semester.js');
const Room = require('../models/Room.js');

Account.hasOne(Admin, {foreignKey: 'IDAdmin'});
Account.hasOne(Lecturer, {foreignKey: 'IDLecturer'});
Account.hasOne(Student, {foreignKey: 'IDStudent'});
Course.hasMany(TimeSlot, {foreignKey: 'IDCourse'});
Semester.hasMany(TimeSlot, {foreignKey: 'IDSemester'});
Semester.hasMany(Course, {foreignKey: 'IDSemester'});
Room.hasMany(TimeSlot, {foreignKey: 'IDRoom'});
Lecturer.hasMany(Course, {foreignKey: 'IDLecturer'});
Course.belongsToMany(Student, {through: 'Enrollment', foreignKey: 'IDCourse'});
Student.belongsToMany(Course, {through: 'Enrollment', foreignKey: 'IDStudent'});	

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created here!`)
  });