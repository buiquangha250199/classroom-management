const express = require('express');
const router = express.Router();

let adminController = require('../controllers/adminController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('test');
});

 router.get('/test', adminController.testAdmin) ;
//router.post('/room/new',adminController.createNewRoom);
// router.get('/user/find',adminController.findUserByID);
// router.put('/user/update',adminController.updateUser);
// router.get('/user/delete', adminController.deleteUser);


// // shift




module.exports = router ;