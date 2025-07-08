async function addItemToCart(currentCart, item){
    currentCart.push(item);
    return currentCart;
};

async function decreaseItemToCart(currentCart, item, name){};

async function removeItemToCart(currentCart, item, index){};

async function totalValueCart(currentCart){
    const totalResult = currentCart.reduce((total, currentItem) => total + currentItem.subtotal(), 0).toFixed(2);
    return totalResult;
};

export default {
    addItemToCart,
    decreaseItemToCart,
    removeItemToCart,
    totalValueCart
};