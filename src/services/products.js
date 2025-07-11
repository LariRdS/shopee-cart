import crypto from 'node:crypto';

async function createItem(name, price, quantity) {
    return {
        id: crypto.randomUUID(),
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    };
}

const itemsCart = [
    await createItem('Laptop', 1500.00, 1),
    await createItem('Shoes', 99.90, 2),
    await createItem('Shirt', 34.50, 4),
    await createItem('Hat', 19.99, 3)
];

const itemsWhisList = [
    await createItem('Smartphone', 799.99, 1),
    await createItem('Headphones', 199.99, 1),
    await createItem('Monitor', 299.99, 1),
    await createItem('Keyboard', 49.99, 1)
];

export default {itemsCart, itemsWhisList};
