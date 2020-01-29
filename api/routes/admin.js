const { Router } = require('express');
const mongoose = require('mongoose');
const router  = Router();


//controllers imports
const createNewGuard = require('../controllers/admin');

//create guard account
router.post('/new-guard', createNewGuard.newGuardAccount);

//guard login
router.get('/login', )

module.exports = router;

