import itemsService from "./services/products.js";
import cartService from "./services/cart.js";

const itemsWhisListishList = itemsService.itemsWhisList;
const itemsCart = itemsService.itemsCart;

function breakLine() {
    console.log('-----------------------------------');
}

function wishList() {
    if (itemsWhisListishList.length === 0) {
        console.log('Your wish list is empty.');
    } else {
        itemsWhisListishList.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$${item.price}`);
        });
    }
}

function cart() {
    if (itemsCart.length === 0) {
        console.log('Your cart is empty.');
    } else {
        itemsCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$${item.price} x ${item.quantity} = R$${item.subtotal()}`);
        });
    }
}

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
