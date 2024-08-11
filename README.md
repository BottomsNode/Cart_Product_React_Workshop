# Project Name

## Description

A React application for managing a shopping cart with product listings, integrated with a backend server and MongoDB for data storage. This project demonstrates the use of React for building single-page applications (SPA) and connecting to a MongoDB database through a backend server.

## Features

- Single-page application using React and Vite
- Routing for page navigation
- Dynamic product listing with image display
- CRUD operations on products
- Integration with MongoDB for data storage

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```
2. **Install Dependencies**
    *Frontend:*
    Navigate to the frontend directory (if you have separate directories for frontend and backend) and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

    *Backend:*
    Navigate to the backend directory (if applicable) and install dependencies:

   ```bash
   cd backend
   npm install
   ```

4. **Start the Backend Server**

   ```bash
   npm run start
   ```   
   
6. **Start the Frontend Development Server**

   ```bash
   npm run dev
   ```
Open your browser and go to http://localhost:3000 to view the application.

8. **Components**
    App.js: The main component that renders the Cart component.
    Cart.js: Manages the state of products and integrates with Header, ProductList, and Footer.
    ProductList.js: Displays a list of products using CartItem components.
    CartItem.js: Represents individual products and includes functionality for displaying product details and deleting products.
    Header.js: Displays the header of the application.
    Footer.js: Shows the subtotal and provides checkout options.

9. **Database Schema**
    ```bash
    {
    "_id": <ObjectId>,
    "name": "Product Name",
    "brand": "Brand Name",
    "price": Number,
    "qty": Number,
    "image": "/path/to/image.jpg"
   }
   ```

11. **API Endpoints**
   GET /products  : Retrieve all products.
   POST /products : Add a new product.
   PUT /products/ :Update an existing product by ID.
   DELETE /products/ : Delete a product by ID.

12. **Acknowledgements**
    React
    Vite
    FontAwesome
    MongoDB
    Express.js

13. ## Customization

- Replace BottomsNode with your GitHub repository URL.
- Update the paths and commands according to your project structure.
- Add or remove sections as needed based on your project's specifics.

# Thankyou !!
