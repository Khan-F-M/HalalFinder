const express = require('express');
const path = require('path');
const rest = require('./modules/restaurantsdb.js')

const app = express();
app.use(express.static('views'));
const HTTP_PORT = process.env.PORT || 8080;

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

app.get('/Restaurants/:id', (req, res) => {
    rest.getResturantById(req.params.id).then((data) => {
        res.json({data});
    }).catch((err) => {
        res.json({message: err});
    })
});

app.get('/Categories/:id', (req, res) => {
    rest.getCuisineTypeById(req.params.id).then((data) => {
        res.json({data: data});
    }).catch((err) => {
        res.json({message: err});
    })
});

app.get('/places/:id', (req, res) => {
    rest.getRestaurantsByCuisineType(req.params.id).then((data) => {
        res.json({data: data});
    }).catch((err) => {
        res.json({message: err});
    })
});

app.listen(HTTP_PORT);