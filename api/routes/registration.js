const { Router } = require('express');

const router  = Router();


//controllers imports
const RoutesController = require('../controllers/registration');
//Add a new Guard
router.post('/new-guard', RoutesController.newGuardAccount);

//Add new Company Client
router.post('/new-company', RoutesController.addNewCompanyClient);

//Add new Stuff Member
router.post('/new-stuff', RoutesController.addNewStuffMember);

//Add Individual Client
router.post('/new-individual', RoutesController.newIndividualClient);

module.exports = router;

 