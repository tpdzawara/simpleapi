const { Router } = require('express');
const router  = Router();

const authenticate = require('../middleware/authenticate');

//controllers imports
const RoutesController = require('../controllers/registration');
//Add a new Guard
router.post('/new-guard', authenticate, RoutesController.newGuardAccount);

//Get all guards
router.get('guards', RoutesController.allGuards);

//Add new Stuff Member
router.post('/new-stuff', authenticate, RoutesController.addNewStuffMember);

//get All Stuff Members 
router.get('/stuff', RoutesController.allStuffMembers);


//Add Individual Client
router.post('/new-client', authenticate, RoutesController.newClient);

//get All Clients
router.get('/clients', RoutesController.allClients);

module.exports = router;

 