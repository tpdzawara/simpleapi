const { Router } = require('express');
const mongoose = require('mongoose');
const router  = Router();


//controllers imports
const adminController = require('../controllers/admin');

//create guard account
router.post('/new-guard', adminController.newGuardAccount);

//guard login
router.get('/guard-login', adminController.guardLogin);

module.exports = router;

