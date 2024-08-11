import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";

function Cart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                console.log('Fetched products:', response.data); // Log the fetched data
                setProducts(response.data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const total = products.reduce((acc, product) => acc + product.price * product.qty, 0);

    return (
        <div className="cart">
            <Header products={products} />
            <hr />
            <ProductList products={products} setProducts={setProducts} />
            <hr />
            <Footer total={total} />
        </div>
    );
}

export default Cart;
