# Fruit Shop Prototype App

This is a client-side web app prototype for a simple fruit shop, created using HTML, CSS, and JavaScript. The app demonstrates basic e-commerce concepts, including product browsing, product details, shopping cart management, and checkout summary.

## Features
- Product listing with emoji images, name, price per unit, and quantity selection
- Product details page with full description
- Shopping cart with quantity update and remove options
- Checkout page with order summary and total
- Left-side navigation menu (collapsible on small screens)
- Responsive, visually appealing UI (adapts to desktop and mobile)
- No backend or authentication; all data is static and client-side

## Getting Started
1. **Run a local server in the ShoppingAPP folder:**
   - Using Python 3:
     ```
     python3 -m http.server 8000
     ```
   - Then open [http://localhost:8000](http://localhost:8000) in your browser.
2. **Navigate the app:**
   - Use the left navigation bar to switch between Products, Product Details, Shopping Cart, and Checkout pages.
   - Add products to your cart, update quantities, and process a sample order.

## Project Structure
- `index.html` — Main entry point
- `styles.css` — App styling and layout
- `app.js` — App logic and UI rendering
- `.github/copilot-instructions.md` — Product requirements and wireframes

## Requirements
- Modern web browser
- No server or database required

## Notes
- This is a static prototype for demonstration purposes only.
- The navigation bar collapses when the window width drops below 300px.
- All product data is hardcoded in the app.js file.
