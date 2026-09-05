# 🛍️ Final Project Shop — Modern E-Commerce SPA

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Final Project Shop** is a feature-rich, single-page application (SPA) simulating a full-fledged e-commerce platform complete with a customer-facing storefront and a protected Admin Dashboard. Designed and built from scratch to showcase frontend development best practices, state management architecture, and clean component composition.

---

## ✨ Key Features

### 🛒 Storefront (Customer Experience)
- **Interactive Product Catalog:** Browse products with dynamic rendering and seamless navigation.
- **Detailed Product Views:** Dedicated product pages featuring rich information and direct cart actions.
- **Stateful Shopping Cart:** Add items, adjust quantities, or remove products with instant subtotal and total calculations.
- **Persistent State:** Persistent shopping cart data synced across sessions via `LocalStorage`.
- **Fully Responsive Layout:** Optimized for mobile, tablet, and desktop viewports.

### 🔐 Admin Dashboard
- **Secure Authentication:** Protected admin routes with login form validation (email/password).
- **Full CRUD Management:** Create, Read, Update, and Delete inventory items in real time.
- **Route Guards:** Route protection mechanisms restricting access to unauthorized visitors.

### 🛠️ Technical Highlights
- **Global State Management:** Powered by Redux Toolkit slices (`auth`, `cart`, `products`).
- **Asynchronous API Integration:** Clean HTTP requests handled via Axios with centralized loading & error handling.
- **Mock REST API Backend:** Powered by `json-server` for authentic asynchronous backend simulation.
- **Parallel DX Workflow:** `concurrently` integration to start both frontend and mock server in a single command.

---

## 🧰 Tech Stack & Architecture

| Technology | Purpose |
| :--- | :--- |
| **React** | UI library for building interactive component hierarchies |
| **Vite** | Next-generation frontend tooling for instant HMR and optimized builds |
| **Redux Toolkit** | Predictable state container for global app state management |
| **React Router** | Client-side routing and page navigation |
| **React Hook Form** | Performant, flexible form state management and validation |
| **Axios** | Promise-based HTTP client for API requests |
| **json-server** | Full fake REST API server |
| **Concurrently** | Utility for running multiple npm commands concurrently |
| **CSS3** | Custom styling and responsive design |

---

## ⚡ Quick Start

### Prerequisites
Make sure you have **Node.js** (v16.0 or higher) and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
  ```bash
  git clone [https://github.com/your-username/final-project-shop.git](https://github.com/your-username/final-project-shop.git)
  cd final-project-shop
  ```

2. **Install dependencies:**
  ```bash
  npm install
  ```


3. **Run the Application & Mock API concurrently:**
  ```bash
  npm run start
  ```


* **Frontend App:** [http://localhost:3000](http://localhost:3000)
* **Mock REST API:** [http://localhost:3001](http://localhost:3001)



---

### Alternative Scripts

| Script | Action |
| --- | --- |
| `npm run dev` | Starts the React frontend development server only |
| `npm run server` | Starts the `json-server` mock backend only |
| `npm run build` | Bundles the application for production deployment |

---

## 🔑 Admin Credentials

To test the Admin Panel features, log in using the following credentials:

* **Login Route:** `/admin/login`
* **Email:** `admin@example.com`
* **Password:** `admin123`

---

## 📂 Project Structure

```
final-project-shop/
├── public/                    # Static assets
├── src/
│   ├── api/                   # Axios instances and API service functions
│   ├── components/            # Reusable UI components (Navbar, Footer, Cards)
│   ├── features/              # Redux slices (authSlice, cartSlice, productsSlice)
│   ├── pages/                 # Route-level view components
│   ├── store/                 # Redux store configuration
│   ├── styles/                # Global CSS stylesheets
│   ├── App.jsx                # Application root & Router configuration
│   └── main.jsx               # React entry point
├── db.json                    # Mock REST API database (products, admin users)
├── vite.config.js             # Vite configuration settings
├── package.json               # Project dependencies and operational scripts
└── README.md                  # Project documentation

```

---

## 🚀 Roadmap & Future Enhancements

* [ ] **Advanced Filtering & Search:** Implement full-text search and category/price range filters.
* [ ] **Styling Upgrade:** Refactor CSS to Tailwind CSS or CSS Modules for improved modularity.
* [ ] **Real Authentication:** Transition from client-side mock auth to full JWT-based authentication.
* [ ] **Unit & Integration Testing:** Add test coverage using Vitest and React Testing Library.
* [ ] **Internationalization (i18n):** Multi-language support (English / Russian).
* [ ] **UI Animations:** Incorporate Framer Motion for smooth transitions and interactions.
* [ ] **Performance Optimization:** Implement lazy loading for routes and images.

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
