const Car = require('../models/Car');
const car = new Car;



exports.getAll = (req, res) => {

   promiseRes = car.getAll();

   promiseRes
      .then((response) => {
         res.json({
            status: true,
            message: 'Get All Cars',
            response
         });
      }).catch((error) => {
         res.json({
            status: false,
            message: 'There was a error',
            error
         });
      });
}


exports.getById = (req, res) => {
   let id = req.params.id;

   promiseRes = car.getAll();

   promiseRes
      .then((response) => {
         let carsId = response.filter(car => car.id == id);

         res.json({
            status: true,
            message: 'Get Car By Id',
            response: carsId
         });
      }).catch((error) => {
         res.json({
            status: false,
            message: 'There was a error',
            error
         });
      });
}



exports.getByType = (req, res) => {
   let types = req.params.type;
   types = types.split(',');

   promiseRes = car.getAll();

   promiseRes
      .then((response) => {
         let carsType = [];

         types.forEach(type => {
            response.forEach(car => {
               if(car.type.toLowerCase().includes(type.toLowerCase())) carsType.push(car);
            });
         });

         res.json({
            status: true,
            message: 'Get Cars By Type',
            response: carsType
         });
      }).catch((error) => {
         res.json({
            status: false,
            message: 'There was an error',
            error
         });
      });
}



exports.getByModel = (req, res) => {
   let model = req.params.model;

   promiseRes = car.getAll();

   promiseRes
      .then((response) => {
         let carsModel = response.filter(car => car.model.toLowerCase().includes(model.toLowerCase()));

         res.json({
            status: true,
            message: 'Get Cars By Model',
            response: carsModel
         });
      }).catch((error) => {
         res.json({
            status: false,
            message: 'There was an error',
            error
         });
      });
}



exports.getByMake = (req, res) => {
   let make = req.params.make;

   promiseRes = car.getAll();

   promiseRes
      .then((response) => {
         let carsMake = response.filter(car => car.make.toLowerCase().includes(make.toLowerCase()));

         res.json({
            status: true,
            message: 'Get Cars By Make',
            response: carsMake
         });
      }).catch((error) => {
         res.json({
            status: false,
            message: 'There was an error',
            error
         });
      });
}



exports.getFromYear = (req, res) => {
   let year = req.params.year;

   promiseRes = car.getAll();

   promiseRes
      .then((response) => {
         let carsYear = response.filter(car => car.year >= year);

         res.json({
            status: true,
            message: 'Get Cars with Year Greater Than...',
            response: carsYear
         });
      }).catch((error) => {
         res.json({
            status: false,
            message: 'There was an error',
            error
         });
      });
}



exports.getUntilYear = (req, res) => {
   let year = req.params.year;

   promiseRes = car.getAll();

   promiseRes
      .then((response) => {
         let carsYear = response.filter(car => car.year <= year);

         res.json({
            status: true,
            message: 'Get Cars with Year Minor than...',
            response: carsYear
         });
      }).catch((err) => {
         res.json({
            status: false,
            message: 'There was an error',
            error
         });
      });
}



exports.getByYear = (req, res) => {
   let year = req.params.year;

   promiseRes = car.getAll();

   promiseRes
      .then((response) => {
         let carsYear = response.filter(car => car.year == year);

         res.json({
            status: true,
            message: 'Get Cars By Year',
            response: carsYear
         });
      }).catch((err) => {
         res.json({
            status: false,
            message: 'There was an error',
            error
         });
      });
}