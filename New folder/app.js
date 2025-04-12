// app.js
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.getAttribute('data-product');
            const productPrice = event.target.getAttribute('data-price');
            addToCart(productName, productPrice);
        });
    });
});

let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: parseInt(productPrice) };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItemCount = cart.length;
    alert(`تم إضافة منتج إلى سلة المشتريات. عدد العناصر في السلة: ${cartItemCount}`);
    console.log("محتويات السلة:", cart);
}
