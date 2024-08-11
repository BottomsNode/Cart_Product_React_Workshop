function CartItem(props) {
    // console.log('CartItem props:', props);  // Log all props to check

    return (
        <tr>
            <td><img src={props.image || "https://placehold.co/150"} alt={props.name} width={250} /></td>
            <td><h3>{props.name}</h3><p>{props.brand}</p></td>
            <td>${props.price.toLocaleString()}</td>
            <td><input type="number" value={props.qty} readOnly /></td>
            <td>
                <button className="fa-solid fa-arrow-rotate-right"></button>
                &nbsp;&nbsp;&nbsp;
                <button
                    onClick={() => {
                        console.log('Product _id to delete:', props._id); // Check if _id is defined
                        const updatedProducts = props.products.filter(product => product._id !== props._id);
                        console.log('Updated products list:', updatedProducts); // Check the updated list
                        props.setProducts(updatedProducts);
                    }}
                    className="fa-solid fa-trash-can">
                </button>
            </td>
        </tr>
    );
}

export default CartItem;
