const https = require('https');

class Car {
   id = 0;
   year = '';
   make = '';
   model = '';
   type = '';

   getAll() {
      return new Promise((resolve, reject) => {
         let options = {
            host : 'car-data.p.rapidapi.com',
            path: '/cars',
            headers: {
               'X-RapidAPI-Key' : '9c2b3f8a95mshd58ae09eb859c23p13d7b6jsn288fa62001bc',
               'X-RapidAPI-Host' : 'car-data.p.rapidapi.com'
            }
         }
         
         const req = https.request(options, (res) => {
            let dataRes = '';
            res.on('data', (chunk) => {
               dataRes += chunk.toString();
            });
         
            res.on('end', () => {
               resolve(JSON.parse(dataRes));
            });
         });
         
         req.on('error', (err) => {
            reject(err)
         });
         
         req.end();
      });
   }
}

module.exports = Car;