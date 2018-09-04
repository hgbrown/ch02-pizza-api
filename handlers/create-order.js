'use-strict';

function createOrder(order) {
    if (!order || !order.pizzaId || !order.address) {
        throw new Error(`No pizza identified or no address for delivery identified. ${JSON.stringify(order)}`);
    }

    return {};
}

module.exports = createOrder;