const express = require('express');
const router = express.Router();

let adminController = require('../controllers/adminController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('test');
});

router.get('/', function(req, res, next) {
    res.send('tong');
});

 router.get('/test', adminController.testAdmin) ;
  router.get('/tong', adminController.activeRoom) ;
  router.post('/room', adminController.allClassTime);

// router.post('/user/create',adminController.createNewUser);
// router.get('/user/find',adminController.findUserByID);
// router.put('/user/update',adminController.updateUser);
// router.get('/user/delete', adminController.deleteUser);



// // shift



module.exports = router ;