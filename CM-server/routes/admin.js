const express = require('express');
const router = express.Router();

let adminController = require('../controllers/adminController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('test');
});

  router.get('/totalRoom', adminController.totalRoom);
  router.get('/totalClass', adminController.totalCourse);
  
  router.post('/allRoom', adminController.allRoom);
  router.post('/allLecturer', adminController.allLecturer);
  router.post('/allCourse', adminController.allCourse);

  router.post('/deleteClass', adminController.deleteCourse);
  router.post('/editClass', adminController.editCourse);
  router.post('/roomUseCase', adminController.roomUseCase);
  router.post('/allCourseTime', adminController.allCourseTime);
  router.post('/newTimeSlot', adminController.newTimeSlot);

  router.post('/deleteTimeSlot', adminController.deleteTimeSlot);
  router.post('/importFromCSV', adminController.importFromCSV);

// router.post('/user/create',adminController.createNewUser);
// router.get('/user/find',adminController.findUserByID);
// router.put('/user/update',adminController.updateUser);
// router.get('/user/delete', adminController.deleteUser);



// // shift



module.exports = router ;