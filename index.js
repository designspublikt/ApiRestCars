const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

/* Server Settings */
   app.use(cors());
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: false}));

/* Server Routes */
   app.get('/', (req, res) => {
      res.redirect('/api');
   });

   app.get('/api', (req, res) => {
      res.send('Welcome to API Cars');
   });

   /* Use Routes */
      app.use('/api/cars', require('./routes/carsRoutes'));


   /* PORT Configuration */
      const PORT = process.env.PORT || 3000;

      app.listen(PORT, () => {
         console.log(`Server runing on Port: ${PORT}`);
      });
