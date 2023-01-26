const express = require('express');
const path = require('path');
const axios = require("axios");
const exphbs = require('express-handlebars');
const API_KEY = 'AIzaSyD7upQpwpyINxcUbRZy6aP4hbXOqFwhPu8';

const mapsClient = require('@google/maps').createClient({
    key: 'AIzaSyD7upQpwpyINxcUbRZy6aP4hbXOqFwhPu8'
});


const app = express();

/*******************************************************/
// Tell Express where to find the hbs views
app.set('views', path.join(__dirname, 'views'))

const hbs = exphbs.create({
    partialsDir: path.join(__dirname, 'views/partials')
});

/*Our server needs to know how to handle HTML files
that are formatted using handlebars, so near the top
of our code (after we define our “app”), add the lines:*/
app.engine('.hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
/*******************************************************/



app.use(express.static('views'));

const HTTP_PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ msg: 'Api Listening' })
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/about.html'));
});

app.get('/halal-restaurants', async (req, res) => {
    try {
        // Get the user input address
        const address = req.query.address;

       
    } catch (error) {
        console.error(error);
    }
});


app.listen(HTTP_PORT);