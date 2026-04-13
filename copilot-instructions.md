# Product Requirements Document (PRD): Fruit Shop Prototype App

## 1. App Overview / Purpose
A client-side web app that allows online shoppers to browse, view details, add to cart, and check out fruit products. The app demonstrates basic e-commerce concepts with a dynamic, visually appealing interface.

## 2. Target Audience
- Online shoppers interested in ordering fruit products.
- Users accessing the app from desktop or mobile devices.

## 3. Core Features
- **Product Listing:** Display a list of 10 fruit products with name, price per unit, and emoji image.
- **Product Details:** Show detailed info for a selected product.
- **Shopping Cart:** Add, update, and remove products; view cart summary.
- **Checkout:** Display order summary and total price; "Process Order" button (no real processing).
- **Navigation:** Left-side menu for page navigation, collapsible on small screens.

## 4. Pages & Navigation
- **Products Page:** List all products, allow quantity selection, and add to cart.
- **ProductDetails Page:** Show full details for a selected product, with back navigation.
- **ShoppingCart Page:** List cart items, allow quantity updates and removals.
- **Checkout Page:** Show purchase summary and total, with a "Process Order" button.
- **Navigation Menu:** Left-side, collapses to abbreviations below 300px width, links to all pages.

## 5. Sample Dataset
- 10 fruit products, each with:
  - Name (e.g., "Apple")
  - Description (e.g., "Fresh and crisp apples")
  - Price per unit (e.g., "$1.00 per lb")
  - Unit (e.g., "lb", "each")
  - Emoji image (e.g., 🍎)

## 6. Basic Use Cases
- User browses products and views details.
- User selects quantity and adds products to cart.
- User reviews and updates cart contents.
- User proceeds to checkout and views order summary.

## 7. Technical Requirements
- **Technologies:** HTML, CSS, JavaScript (client-side only).
- **No backend:** All data is static and stored client-side.
- **Responsive UI:** Scales for desktop and mobile; navigation menu collapses on small screens.
- **No frameworks or libraries** unless otherwise specified.

## 8. Styling Guidelines
- Visually appealing, clean, and simple.
- Not fully responsive or polished, but adapts to screen size.
- Left-side navigation menu with collapsible behavior.

## 9. Out of Scope
- User authentication
- Payment processing
- Database or backend integration
- Real order processing

## 10. Acceptance Criteria
- All pages are accessible via the navigation menu.
- Product list, details, cart, and checkout function as described.
- Sample dataset is used and displayed.
- Navigation menu collapses below 300px width.
- UI is visually appealing and adapts to screen size.

---

# Wireframe Diagrams

## Navigation Bar (Expanded)
------------------------
+---------------------+-----------------------------+
| [🍎 Products      ] |                             |
| [🔍 ProductDetails] |   Main Content Area         |
| [🛒 ShoppingCart ] |   (Page content here)        |
| [💳 Checkout     ] |                             |
+---------------------+-----------------------------+

## Navigation Bar (Collapsed, <300px width)
----------------------------------------
+-----+-----------------------------+
| P   |                             |
| PD  |   Main Content Area         |
| SC  |   (Page content here)        |
| CO  |                             |
+-----+-----------------------------+

P = Products, PD = ProductDetails, SC = ShoppingCart, CO = Checkout

---

## Products Page
-------------
+---------------------+-----------------------------+
| [Nav Menu]          |  Products                   |
|                     |  ------------------------  |
|                     |  🍎 Apple   $1.00/lb [Qty][+][-] [Add] |
|                     |  🍌 Banana  $0.50/lb [Qty][+][-] [Add] |
|                     |  ... (other fruits)         |
+---------------------+-----------------------------+

---

## ProductDetails Page
-------------------
+---------------------+-----------------------------+
| [Nav Menu]          |  🍎 Apple                    |
|                     |  ------------------------  |
|                     |  Description: Fresh apples  |
|                     |  Price: $1.00/lb           |
|                     |  [Back to Products]         |
+---------------------+-----------------------------+

---

## ShoppingCart Page
------------------
+---------------------+-----------------------------+
| [Nav Menu]          |  Shopping Cart              |
|                     |  ------------------------  |
|                     |  🍎 Apple   x2   $2.00 [Update][Remove]|
|                     |  🍌 Banana  x1   $0.50 [Update][Remove]|
|                     |  ------------------------  |
|                     |  [Checkout]                |
+---------------------+-----------------------------+

---

## Checkout Page
-------------
+---------------------+-----------------------------+
| [Nav Menu]          |  Checkout                   |
|                     |  ------------------------  |
|                     |  🍎 Apple   x2   $2.00      |
|                     |  🍌 Banana  x1   $0.50      |
|                     |  ------------------------  |
|                     |  Total: $2.50              |
|                     |  [Process Order]            |
+---------------------+-----------------------------+
