'use-strict';

const pizzas = require('../data/pizzas');

function getPizzas(pizzaId) {
    if (!pizzaId) {
        return pizzas;
    }

    // noinspection EqualityComparisonWithCoercionJS
    const pizza = pizzas.find((pizza) => pizza.id == pizzaId);

    if (pizza) {
        return pizza
    }

    throw new Error(`No pizza with the id: ${pizzaId} could be found`);
}

module.exports = getPizzas;