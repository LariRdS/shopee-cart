import items from "./services/products.js";
import cartService from "./services/cart.js";

const userCart = [];

const item1 = items[0];
const item2 = items[1];
const item3 = items[2];
const item4 = items[3];

const promiseItems = items.map(async (item) => {
    return await cartService.addItemToCart(userCart, item);
});
await Promise.all(promiseItems);

console.log('Welcome to your shopping cart!');
console.log(`\nHere are the products in your cart:\n`);
console.log(`1. ${item1.name} - R$${item1.price} x ${item1.quantity} = R$${item1.subtotal()}`);
console.log(`2. ${item2.name} - R$${item2.price} x ${item2.quantity} = R$${item2.subtotal()}`);
console.log(`3. ${item3.name} - R$${item3.price} x ${item3.quantity} = R$${item3.subtotal()}`);
console.log(`4. ${item4.name} - R$${item4.price} x ${item4.quantity} = R$${item4.subtotal()}`);
console.log('-----------------------------------');
console.log(`Total: R$${(await cartService.totalValueCart(userCart))}`);
console.log('-----------------------------------');
console.log('Thank you for shopping with us!');
