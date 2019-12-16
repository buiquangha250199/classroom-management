const express = require('express');
const router = express.Router();

let adminController = require('../controllers/adminController');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('test');
});

  router.post('/roomUseCase', adminController.roomUseCase);
  router.post('/allCourseTime', adminController.allCourseTime);
  router.post('/newTimeSlot', adminController.newTimeSlot);
  router.post('/deleteTimeSlot', adminController.deleteTimeSlot);
  router.post('/importFromCSV',upload.single('file'), adminController.importFromCSV);

  router.get('/totalRoom', adminController.totalRoom);
  router.get('/totalCourse', adminController.totalCourse);
  router.get('/totalLecturer', adminController.totalLecturer);
  router.get('/totalStudent', adminController.totalStudent);

  router.get('/room/list', adminController.allRoom);
  router.get('/lecturer/list', adminController.allLecturer);
  router.get('/course/list', adminController.allCourse);
  router.get('/semester/list', adminController.allSemester);

  router.post('/course/new', adminController.newCourse);
  router.post('/room/new', adminController.newRoom);

  router.put('/room/edit', adminController.editRoom);
  router.put('/course/edit', adminController.editCourse);

  router.delete('/room/delete', adminController.deleteRoom);
  router.delete('/course/delete', adminController.deleteCourse);

  // router.get('/deleteCourse', adminController.deleteCourse);
  // router.get('/activeRoom', adminController.activeRoom) ;
  // router.post('/deleteClass', adminController.deleteCourse);
  // router.post('/editClass', adminController.editCourse);
  // router.post('/roomUseCase', adminController.roomUseCase);
  // router.post('/allClassTime', adminController.allCourseTime);
  // router.post('/newTimeSlot', adminController.newTimeSlot);

  // router.post('/deleteTimeSlot', adminController.deleteTimeSlot);




module.exports = router ;