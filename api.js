'use strict';

const API = require('claudia-api-builder');
const api = new API();
const getPizzas = require('./handlers/get-pizzas');


api.get('/', () => 'Pizza API 1.0.0');

api.get('/pizzas', () => getPizzas());
api.get('/pizzas/{id}', (request) => getPizzas(request.pathParams.id), {error: 404});

module.exports = api;