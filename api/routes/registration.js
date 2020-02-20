const { Router } = require('express');

const router  = Router();

//controllers imports
const RoutesController = require('../controllers/registration');
//Add a new Guard
router.post('/new-guard', RoutesController.newGuardAccount);

//Add new Stuff Member
router.post('/new-stuff', RoutesController.addNewStuffMember);

//Add Individual Client
router.post('/new-client', RoutesController.newClient);

module.exports = router;

 