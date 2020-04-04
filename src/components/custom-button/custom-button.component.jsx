/*
This component is used to create a custom styled button
Using "...otherProps" in the button will pass in the button type, such as "submit"
"isGoogleSignIn" prop is used to determine if we should style the button differently
 The button always has the "custom-button" class, but will also have "google-sign-in"
    if isgoogleSignIn prop is set to true.
*/

import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted': ''} 
                        ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps} >
        {children}
    </button>
);

export default CustomButton;