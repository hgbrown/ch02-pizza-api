'use strict';

const API = require('claudia-api-builder');
const api = new API();
const getPizzas = require('./handlers/get-pizzas');
const createOrder = require('./handlers/create-order');

api.get('/', () => 'Pizza API 1.0.0');

api.get('/pizzas', () => getPizzas());
api.get('/pizzas/{id}', (request) => getPizzas(request.pathParams.id), {error: 404});

api.post('/orders', (request) => {
    return createOrder(request.body)
}, {
    success: 201,
    error: 400
});


module.exports = api;