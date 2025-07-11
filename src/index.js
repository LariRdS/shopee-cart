import itemsService from "./services/products.js";
import cartService from "./services/cart.js";

const itemsWhisList = itemsService.itemsWhisList;
const itemsCart = itemsService.itemsCart;

function breakLine() {
    console.log('-----------------------------------');
}

function wishList() {
    if (itemsWhisList.length > 0) {
        itemsWhisList.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$${item.price}`);
        });
        return
    }
    console.log('Your wish list is empty.');
}

function cart() {
    if (itemsCart.length > 0) {
        itemsCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$${item.price} x ${item.quantity} = R$${item.subtotal()}`);
        });
        return;
    }
    console.log('Your cart is empty.');
}

await cartService.removeItem(itemsWhisList, itemsWhisList[0].id);
await cartService.decreaseItem(itemsCart, itemsCart[2].id);

console.log('Welcome to your shopping cart!');
console.log(`\nHere are the products in your wish list:\n`);
wishList();
breakLine();
console.log(`\nHere are the products in your cart:\n`);
cart();
breakLine();
console.log(`Total: R$${(await cartService.totalValueCart(itemsCart))}`);
breakLine();
console.log('Thank you for shopping with us!');
