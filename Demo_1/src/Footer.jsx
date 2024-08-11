function Footer(props) {
    return (
        <div className="footer">
            <h2>Sub Total</h2>
            <h2>Rs - {props.total.toLocaleString()}</h2>

            <div className="row">
                <a href="#">Continue Shopping</a>&nbsp;&nbsp;
                <button>Checkout</button>
            </div>
        </div>
    );
}

export default Footer;
