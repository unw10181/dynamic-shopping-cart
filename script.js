const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

// Update total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Remove item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// Add product
addProductButton.addEventListener("click", () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Validation checks for if name
  if (name == "" || isNaN(price) || price <= 0) {
    alert("Please enter a valid product name and price.");
    return;
  }

  // Create cart item
  const li = document.createElement("li");
  li.classList.add("cart-item");
  li.dataset.price = price;
  //create span element
  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;

  const priceSpan = document.createElement("span");
  priceSpan.textContent = `$${price.toFixed(2)}`;
  //create delete button
  const dltButton = document.createElement("button");
  dltButton.textContent = "Delete";
  //Implements removeitem function right here
  dltButton.addEventListener("click", removeItem);

  li.appendChild(nameSpan);
  li.appendChild(priceSpan);
  li.appendChild(dltButton);

  cart.appendChild(li);
  updateTotalPrice(price);

  // Clear inputs after adding
  productNameInput.value = "";
  productPriceInput.value = "";
});
