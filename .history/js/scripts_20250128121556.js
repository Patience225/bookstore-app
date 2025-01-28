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


