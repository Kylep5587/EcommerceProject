/*
This component is used to create a custom styled button
Using "...otherProps" in the button will pass in the button type, such as "submit"
*/

import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps} >
        {children}
    </button>
);

export default CustomButton;