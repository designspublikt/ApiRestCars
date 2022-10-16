const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController');

   router.get('/', carsController.getAll);

   router.get('/id/:id', carsController.getById);

   router.get('/year/:year', carsController.getByYear);
   router.get('/fromyear/:year', carsController.getFromYear);
   router.get('/untilyear/:year', carsController.getUntilYear);

   router.get('/type/:type', carsController.getByType);

   router.get('/make/:make', carsController.getByMake);
   
   router.get('/model/:model', carsController.getByModel);

module.exports = router;