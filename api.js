'use strict';

const API = require('claudia-api-builder');
const api = new API();

api.get('/', () => 'Pizza API 1.0.0');

api.get('/pizzas', () => {
    return [
        'Capricciosa',
        'Quattro Formaggi',
        'Napoletana',
        'Margherita'
    ];

});

module.exports = api;