// Shopping Cart Variables
const cartQuantityElement = document.getElementById("cart-quantity"); // Cart quantity display
let cartItems = []; // Initialize cart items array

// Function to update cart quantity
function updateCartQuantity() {
  const quantity = cartItems.length;
  cartQuantityElement.textContent = quantity;
}

// Function to add item to cart
function addToCart(itemId, itemPrice) {
  cartItems.push({ id: itemId, price: itemPrice });
  updateCartQuantity();
  // Store cart items in localStorage
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Function to display cart items and calculate cart total
function displayCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  cartItemsElement.innerHTML = "";
  let cartTotal = 0;

  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ID: ${item.id}, Price: $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(listItem);
    cartTotal += item.price;
  });

  cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Load cart items from localStorage when the cart page is loaded
window.addEventListener("load", function() {
  cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  displayCart();
});

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", function() {
    const itemElement = this.parentElement;
    const itemId = itemElement.getAttribute("data-id");
    const itemPrice = parseFloat(itemElement.getAttribute("data-price"));
    addToCart(itemId, itemPrice);
  });
});

// Add event listener to "Empty Cart" button
const emptyCartButton = document.getElementById('empty-cart');
emptyCartButton.addEventListener("click", function() {
  cartItems = [];
  updateCartQuantity();
  localStorage.removeItem('cart');
  displayCart();
});
