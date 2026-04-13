// Sample dataset: 10 fruit products
const products = [
  { id: 1, name: "Apple", description: "Fresh and crisp apples", price: 1.0, unit: "lb", emoji: "🍎" },
  { id: 2, name: "Banana", description: "Sweet yellow bananas", price: 0.5, unit: "lb", emoji: "🍌" },
  { id: 3, name: "Orange", description: "Juicy oranges", price: 1.2, unit: "lb", emoji: "🍊" },
  { id: 4, name: "Strawberry", description: "Fresh strawberries", price: 2.5, unit: "lb", emoji: "🍓" },
  { id: 5, name: "Grapes", description: "Seedless grapes", price: 2.0, unit: "lb", emoji: "🍇" },
  { id: 6, name: "Watermelon", description: "Juicy watermelon", price: 0.4, unit: "lb", emoji: "🍉" },
  { id: 7, name: "Pineapple", description: "Tropical pineapple", price: 3.0, unit: "each", emoji: "🍍" },
  { id: 8, name: "Lemon", description: "Sour lemons", price: 0.7, unit: "lb", emoji: "🍋" },
  { id: 9, name: "Cherry", description: "Sweet cherries", price: 3.5, unit: "lb", emoji: "🍒" },
  { id: 10, name: "Peach", description: "Juicy peaches", price: 1.8, unit: "lb", emoji: "🍑" }
];

let cart = [];
let currentPage = "products";
let selectedProductId = null;

function renderNav() {
  const nav = document.createElement("nav");
  nav.id = "nav";
  if (window.innerWidth < 300) nav.classList.add("collapsed");
  const links = [
    { id: "products", icon: "🍎", label: "Products" },
    { id: "productdetails", icon: "🔍", label: "ProductDetails" },
    { id: "shoppingcart", icon: "🛒", label: "ShoppingCart" },
    { id: "checkout", icon: "💳", label: "Checkout" }
  ];
  links.forEach(link => {
    const btn = document.createElement("button");
    btn.className = "nav-link" + (currentPage === link.id ? " active" : "");
    btn.onclick = () => navigate(link.id);
    btn.innerHTML = `<span class="icon">${link.icon}</span><span>${link.label}</span>`;
    nav.appendChild(btn);
  });
  return nav;
}

function renderMain() {
  const main = document.createElement("main");
  main.id = "main";
  if (currentPage === "products") main.appendChild(renderProductsPage());
  else if (currentPage === "productdetails") main.appendChild(renderProductDetailsPage());
  else if (currentPage === "shoppingcart") main.appendChild(renderCartPage());
  else if (currentPage === "checkout") main.appendChild(renderCheckoutPage());
  return main;
}

function renderProductsPage() {
  const div = document.createElement("div");
  div.innerHTML = `<h2>Products</h2>`;
  const list = document.createElement("div");
  list.className = "product-list";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="emoji">${product.emoji}</div>
      <div><b>${product.name}</b></div>
      <div>$${product.price.toFixed(2)} / ${product.unit}</div>
      <button onclick="showProductDetails(${product.id})">Details</button>
      <div style="margin-top:8px;">
        <input type="number" min="1" value="1" id="qty-${product.id}" style="width:40px;" />
        <button onclick="addToCart(${product.id})">Add</button>
      </div>
    `;
    list.appendChild(card);
  });
  div.appendChild(list);
  return div;
}

function renderProductDetailsPage() {
  const product = products.find(p => p.id === selectedProductId);
  const div = document.createElement("div");
  if (!product) {
    div.innerHTML = `<p>Product not found.</p>`;
    return div;
  }
  div.innerHTML = `
    <h2>${product.emoji} ${product.name}</h2>
    <p>${product.description}</p>
    <p>Price: $${product.price.toFixed(2)} / ${product.unit}</p>
    <button onclick="navigate('products')">Back to Products</button>
  `;
  return div;
}

function renderCartPage() {
  const div = document.createElement("div");
  div.innerHTML = `<h2>Shopping Cart</h2>`;
  if (cart.length === 0) {
    div.innerHTML += `<p>Your cart is empty.</p>`;
    return div;
  }
  const table = document.createElement("table");
  table.className = "cart-list";
  table.innerHTML = `<tr><th>Product</th><th>Qty</th><th>Total</th><th>Actions</th></tr>`;
  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.emoji} ${product.name}</td>
      <td><input type="number" min="1" value="${item.qty}" style="width:40px;" onchange="updateCartQty(${item.productId}, this.value)" /></td>
      <td>$${(product.price * item.qty).toFixed(2)}</td>
      <td><button onclick="removeFromCart(${item.productId})">Remove</button></td>
    `;
    table.appendChild(row);
  });
  div.appendChild(table);
  const checkoutBtn = document.createElement("button");
  checkoutBtn.textContent = "Checkout";
  checkoutBtn.onclick = () => navigate('checkout');
  div.appendChild(checkoutBtn);
  return div;
}

function renderCheckoutPage() {
  const div = document.createElement("div");
  div.innerHTML = `<h2>Checkout</h2>`;
  if (cart.length === 0) {
    div.innerHTML += `<p>Your cart is empty.</p>`;
    return div;
  }
  let total = 0;
  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    div.innerHTML += `<div>${product.emoji} ${product.name} x${item.qty} - $${(product.price * item.qty).toFixed(2)}</div>`;
    total += product.price * item.qty;
  });
  div.innerHTML += `<div class="summary">Total: $${total.toFixed(2)}</div>`;
  const processBtn = document.createElement("button");
  processBtn.className = "process-order";
  processBtn.textContent = "Process Order";
  processBtn.onclick = () => alert("Order processed! (Prototype only)");
  div.appendChild(processBtn);
  return div;
}

function navigate(page) {
  currentPage = page;
  if (page !== "productdetails") selectedProductId = null;
  renderApp();
}

function showProductDetails(id) {
  selectedProductId = id;
  currentPage = "productdetails";
  renderApp();
}

function addToCart(productId) {
  const qtyInput = document.getElementById(`qty-${productId}`);
  const qty = parseInt(qtyInput.value) || 1;
  const existing = cart.find(item => item.productId === productId);
  if (existing) existing.qty += qty;
  else cart.push({ productId, qty });
  renderApp();
}

function updateCartQty(productId, qty) {
  qty = parseInt(qty) || 1;
  const item = cart.find(i => i.productId === productId);
  if (item) item.qty = qty;
  renderApp();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.productId !== productId);
  renderApp();
}

function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  const container = document.createElement("div");
  container.id = "container";
  container.appendChild(renderNav());
  container.appendChild(renderMain());
  app.appendChild(container);
}

window.onresize = () => renderApp();
window.renderApp = renderApp;
window.navigate = navigate;
window.showProductDetails = showProductDetails;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;

document.addEventListener("DOMContentLoaded", renderApp);
