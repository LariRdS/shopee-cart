async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    };
}

const items = [
    await createItem('Laptop', 1500.00, 1),
    await createItem('Shoes', 99.90, 2),
    await createItem('Shirt', 34.50, 4),
    await createItem('Hat', 19.99, 3)
];

export default items;
