// Cart Functionality
let cart = [];

function addToCart(name, price, image) {
  cart.push({ name, price, image });
  updateCart();
  
  // Animation: Item flies to cart
  const flyItem = document.createElement('div');
  flyItem.className = 'fly-to-cart';
  flyItem.innerHTML = `<img src="${image}" alt="${name}">`;
  document.body.appendChild(flyItem);
  
  setTimeout(() => {
    flyItem.style.transform = `translate(${window.innerWidth - 100}px, 50px) scale(0.2)`;
    flyItem.style.opacity = '0';
    setTimeout(() => flyItem.remove(), 1000);
  }, 50);
}

function updateCart() {
  document.getElementById('cart-count').textContent = cart.length;
  
  // Update cart items
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
      </div>
    </div>
  `).join('');
  
  // Update total
  document.getElementById('cart-total').textContent = 
    cart.reduce((sum, item) => sum + item.price, 0);
}

function toggleCart() {
  document.querySelector('.cart-sidebar').classList.toggle('active');
}

function checkout() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const itemsList = cart.map(item => `${item.name} - ₹${item.price}`).join('%0A');
  
  window.open(
    `https://wa.me/919847469233?text=Order%20from%20Footwear%20Agencies%0A%0A${itemsList}%0A%0ATotal:%20₹${total}%0A%0ADelivery%20Address:`, 
    '_blank'
  );
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Add click animation to all buttons
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.add('clicked');
      setTimeout(() => this.classList.remove('clicked'), 300);
    });
  });
});