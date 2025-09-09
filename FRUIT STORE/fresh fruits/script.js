let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach((product, index) => {
    let li = document.createElement("li");
    li.textContent = `${product.item} - $${product.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}.`);
    cart = [];
    total = 0;
    displayCart();
  }
}
