const express = require('express');
const router = express.Router();

let adminController = require('../controllers/adminController');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('test');
});

  router.post('/allCourseTime', adminController.allCourseTime);
  router.post('/newTimeSlot', adminController.newTimeSlot);
  router.post('/deleteTimeSlot', adminController.deleteTimeSlot);
  router.post('/importFromCSV',upload.single('file'), adminController.importFromCSV);

  //router.get('/totalRoom', isLoggedIn, adminController.totalRoom);
  router.get('/totalRoom', adminController.totalRoom);
  router.get('/totalCourse', adminController.totalCourse);
  router.get('/totalLecturer', adminController.totalLecturer);
  router.get('/totalStudent', adminController.totalStudent);

  router.get('/room/list', adminController.allRoom);
  router.get('/lecturer/list', adminController.allLecturer);
  router.get('/course/list', adminController.allCourse);
  router.get('/semester/list', adminController.allSemester);
  router.get('/timeslot/list', adminController.allCourseTime);
  router.get('/semester/current', adminController.currentSemester);

  router.post('/course/new', adminController.newCourse);
  router.post('/room/new', adminController.newRoom);
  router.post('/timeslot/new', adminController.newTimeSlot);

  router.put('/room/edit', adminController.editRoom);
  router.put('/course/edit', adminController.editCourse);
  router.put('/timeslot/edit', adminController.editTimeSlot);

  router.delete('/room/delete', adminController.deleteRoom);
  router.delete('/course/delete', adminController.deleteCourse);
  router.delete('/timeslot/delete', adminController.deleteTimeSlot);

  function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');

    }

  router.get('/room/:id', adminController.roomUseCase);

module.exports = router ;