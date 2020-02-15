const { Router } = require('express');

const router  = Router();


//controllers imports
const guardController = require('../controllers/admin');
const addcompanyClientController = require('../controllers/admin');
//create guard account
router.post('/new-guard', guardController.newGuardAccount);

//Add new company in system
router.post('/new-company', addcompanyClientController.addNewCompanyClient);

//guard login
router.get('/guard-login', guardController.guardLogin);

module.exports = router;

