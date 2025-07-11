async function addItemToCart(currentCart, item){
    currentCart.push(item);
    return currentCart;
};

async function decreaseItem(currentCart, id){
    const itemIndex = currentCart.findIndex(cartItem => cartItem.id === id);
    if (itemIndex !== -1) {
        if (currentCart[itemIndex].quantity > 1) {
            currentCart[itemIndex].quantity -= 1;
        } else {
            currentCart.splice(itemIndex, 1);
        }
    }
};

async function removeItem(currentCart, id){
    const itemIndex = currentCart.findIndex(cartItem => cartItem.id === id);
    if (itemIndex !== -1) {
        currentCart.splice(itemIndex, 1);
    } else {
        console.log(`Item not found in the cart.`);
    }
    return currentCart;
};

async function totalValueCart(currentCart){
    const totalResult = currentCart.reduce((total, currentItem) => total + currentItem.subtotal(), 0).toFixed(2);
    return totalResult;
};

export default {
    addItemToCart,
    decreaseItem,
    removeItem,
    totalValueCart
};