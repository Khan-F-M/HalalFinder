const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');
const rest = require('./restaurantsdb.js')
const exphbs = require('express-handlebars');

const app = express();
app.use(express.static('views'));
const HTTP_PORT = process.env.PORT || 8080;

/*******************************************************/
app.set('views', path.join(__dirname, 'views'))

const hbs = exphbs.create({
    partialsDir: path.join(__dirname, 'views/partials')
});

app.engine('.hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
/*******************************************************/

app.get('/', (req, res) => {
    res.json({ msg: 'Api Listening' })
});

app.get('/Restaurants', (req, res) => {
    rest.getAllRestaurants().then((data) => {
        res.json({data});
    }).catch((err) => {
        res.json({message: err});
    })
});
    
app.get('/Categories', (req, res) => {
    rest.getAllCuisineTypes().then((data) => {
        res.json({data});
    }).catch((err) => {
        res.json({message: err});
    })
});

app.listen(HTTP_PORT);