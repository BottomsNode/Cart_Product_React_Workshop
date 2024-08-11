import CartItem from "./CartItem";

function ProductList(props) {
    const name = "Laptops";

    return (
        <table cellPadding={5} cellSpacing={2} className="tableContent">
            <thead>
                <tr>
                    <th></th>
                    <th>Product - {name}</th>
                    <th>Product Price</th>
                    <th>Product Qty</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.products.map(product => (
                    <CartItem
                        key={product._id} // Unique key prop
                        _id={product._id}
                        name={product.name}
                        brand={product.brand}
                        price={product.price}
                        qty={product.qty}
                        image={product.image}
                        products={props.products}
                        setProducts={props.setProducts}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default ProductList;
