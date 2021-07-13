import React from 'react';
import './CartWidget.css';

function CartWidget() {
    return (
        <div className="cart">
              <box-icon name='cart' color='#fff' type='solid' ></box-icon>
                <span className="itemsTotal">0</span>
        </div>
    )
}

export default CartWidget
