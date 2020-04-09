/*
This file handles display of the cart dropdown menu which
    appears when the user clicks on the cart icon.
*/
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => ( // has access to cartItems through the mapStateToProps and connect methods
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)) // Renders if cartItems.length > 0
                :
                <span className='empty-message'>Cart is empty</span>                  // Renders if cart.Items.length == 0
            }
        </div>
        <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());           // Closes the cart dropdown when "Go to checkout" button clicked
                
            }}
        >GO TO CHECKOUT</CustomButton>
    </div>
);

// Uses Reselect
// selectCartItemsCount defined in redux/cart/cart.selectors.js
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// connect() removes the need to write a mapDispatchToProps() method to pass values into our component
export default withRouter(connect(mapStateToProps)(CartDropdown)); // Evaluetes connect() first and passes its value to withRouter()