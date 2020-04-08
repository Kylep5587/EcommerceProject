/*
This file handles display of the cart dropdown menu which
    appears when the user clicks on the cart icon.
*/
import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => ( // has access to cartItems through the mapStateToProps and connect methods
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// Destructurs cartItems property from cart state
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);