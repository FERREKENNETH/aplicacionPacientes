
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();

//CONECTAR A MONGODB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hospital', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(4000, () => {
    console.log('SERVIDOR ARRANCADO, ESTO ES EL index.js, ESCUCHANDO EL PUERTO 4000!')
})