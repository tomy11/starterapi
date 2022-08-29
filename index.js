const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/router/router');
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization');
    return next();
});

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Appication run on port ${PORT}`);
});