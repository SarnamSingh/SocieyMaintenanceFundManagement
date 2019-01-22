const express = require('express');
require('./config/config');
const bodyParser = require('body-parser');
const router  = require('./routes/routes');

//setting up server
const app = express();
app.use(bodyParser.json());
app.use('/', router);
app.listen(global.gCurrentEnvironmentConfiguration.port, ()=>{
    console.log(`${process.env.NODE_ENV} listening on http://localhost:${global.gCurrentEnvironmentConfiguration.port}`);
});


