// Sample cart functionality
let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  alert(`${productName} added to cart!`);
  console.log("Cart:", cart); // Check in browser console
}