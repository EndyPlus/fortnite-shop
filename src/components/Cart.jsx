function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;

    return (
        <div className='cart #f50057 pink accent-3 white-text' onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
}

export {Cart};