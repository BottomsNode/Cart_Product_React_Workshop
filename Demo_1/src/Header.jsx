function Header(props) {
    return (
        <div className="header">
            <h1>Nishit Shivdasani</h1>
            <h2>Shopping Cart</h2>
            <p><b><i>{props.products.length}</i></b> Items in the Cart</p>
        </div>
    );
}

export default Header;
