import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => ( // { title } pulls the value of title off of the props using destructuring
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image' // Div doesn't wrap the content div because we don't want content, title, and subtitle to increase in size when the BG does
            style={{
                backgroundImage: `url(${imageUrl})` // JavaScript template string
            }} 
        /> 
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);