import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import '../collection-item/collection-item.style.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
};


/*
- Recieves item as the property 
- Passes item into the addItem action creator
- Recieves back object of type "addItem" with payload of the item passed into it
- Dispatches the item into the store
*********************************************************/
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) // Dispatches the addItem action from cart.actions.js
})

export default connect(null, mapDispatchToProps)(CollectionItem);