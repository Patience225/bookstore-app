// Cart functionality
document.addEventListener("DOMContentLoaded", () => {
  const decreaseBtns = document.querySelectorAll(".decrease-btn");
  const increaseBtns = document.querySelectorAll(".increase-btn");
  const quantityInputs = document.querySelectorAll(".quantity-input");
  const cartItems = document.querySelectorAll(".cart-item");
  const cartSummary = document.querySelector(".cart-summary h2");

  // Update total price function
  function updateTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const priceElement = item.querySelector(".cart-price");
      const quantityInput = item.querySelector(".quantity-input");
      const price = parseFloat(priceElement.textContent.replace("$", ""));
      const quantity = parseInt(quantityInput.value);

      totalPrice += price * quantity;
    });

    cartSummary.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }

  // Handle quantity increase
  increaseBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      const input = event.target.parentNode.querySelector(".quantity-input");
      input.value = parseInt(input.value) + 1;
      updateTotalPrice();
    });
  });

  // Handle quantity decrease
  decreaseBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      const input = event.target.parentNode.querySelector(".quantity-input");
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        updateTotalPrice();
      }
    });
  });

  // Handle manual quantity input
  quantityInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (parseInt(input.value) < 1) input.value = 1;
      updateTotalPrice();
    });
  });

  // Remove cart item
  const removeBtns = document.querySelectorAll(".remove-btn");
  removeBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      const cartItem = event.target.closest(".cart-item");
      cartItem.remove();
      updateTotalPrice();
    });
  });

  // Initial total price update
  updateTotalPrice();
});


// Wishlist functionality (removing items)
document.addEventListener("DOMContentLoaded", () => {
  const removeWishlistBtns = document.querySelectorAll(".remove-btn");
  
  removeWishlistBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      const wishlistItem = event.target.closest(".wishlist-item");
      wishlistItem.remove();
    });
  });

  // Add to Cart from Book Details Page
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
  
  addToCartBtns.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Book added to cart!");
      // Optionally, implement adding the book to the cart (e.g., saving to localStorage)
    });
  });

  // Add to Wishlist from Book Details Page
  const addToWishlistBtns = document.querySelectorAll(".add-to-wishlist-btn");
  
  addToWishlistBtns.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Book added to wishlist!");
      // Optionally, implement saving to wishlist (e.g., saving to localStorage)
    });
  });
});

// Store cart data in localStorage
function saveCartToLocalStorage() {
  const cartData = [];

  cartItems.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const price = item.querySelector(".cart-price").textContent;
    const quantity = item.querySelector(".quantity-input").value;

    cartData.push({ title, price, quantity });
  });

  localStorage.setItem("cart", JSON.stringify(cartData));
}

// Load cart data from localStorage
function loadCartFromLocalStorage() {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  cartData.forEach((data) => {
    // Dynamically generate cart items based on localStorage data
  });
}

// Call saveCartToLocalStorage whenever the cart is updated
const updateTotalPrice = () => {
  // ... existing code

  saveCartToLocalStorage(); // save to localStorage
};
