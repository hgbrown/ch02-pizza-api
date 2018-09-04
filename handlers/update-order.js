'use-strict';

const pizzas = require('../data/pizzas');

function updateOrder(orderId, updatedOrder) {

    if (!orderId) {
        throw new Error('An id is required in order to perform an update');
    }

    // TODO using pizza list in place of order list till orders are implemented
    const orderIds = pizzas.map(p => p.id);
    console.log('orderIds', orderIds);

    // noinspection EqualityComparisonWithCoercionJS
    const index = orderIds.findIndex(id => id == orderId);

    if (index === -1) {
        throw new Error(`Unable to find order with id: ${orderId}`);
    }

    return updatedOrder;
}

module.exports = updateOrder;