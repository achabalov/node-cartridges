const express = require('express');
const config = require('config');
const cors = require('cors');
const bodyParser = require('body-parser')


//router 
const asyn = require('./router/asyncFetch');
const generator = require('./router/generator');

//config 
const PORT = config.get('PORT') || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// app 
app.use(cors());
app.use('/api', asyn);
app.use('/api', generator);

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port`);
})