const app = require('./app');
const mongoose = require('mongoose');

//import enviromnetal variables from our variables.env file
require('dotenv').config({ path: 'variables.env'});

//connect to Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; //Tell mongoose to use ES^ promise
mongoose.connection.on('error', (err) => {
  console.error(`${err.message}`);
});

//start app
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () =>{
  console.log(`Express is running on port: ${server.address().port}`);
});
