'use-strict';

const pizzas = require('../data/pizzas');

function deleteOrder(orderId) {
    console.log(`Received request to delete order: ${orderId}`);

    if (!orderId) {
        throw new Error('Identifier of order to delete is required');
    }

    // TODO using pizza id as a placeholder for orders - replace with orders

    const map = pizzas.map(p => p.id);
    console.log('map', map);

    // noinspection EqualityComparisonWithCoercionJS
    const orderIndex = map.findIndex(id => id == orderId);
    console.log('orderIndex', orderIndex);

    if(orderIndex === -1) {
        throw new Error(`No order found with id: ${orderId}`);
    }

    return {}
}

module.exports = deleteOrder;