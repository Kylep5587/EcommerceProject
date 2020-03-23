/*
This component is used to render form inputs on the login/register page, such as email and password inputs.
<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}> is used to 
    always set the label className to "form-input-label" while also adding the value of "shrink"
    to the className whenever the user types in the input. - Used for browsers with auto-complete
*/

import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
            </label>)
            :null
        }
    </div>
);

export default FormInput;