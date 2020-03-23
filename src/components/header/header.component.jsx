/* 
Component for creating the navigation bar 
 with links between each page in the app.
 Renders on every page.    
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            <Link className='option' to='/logout'>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            </Link>
        </div>
    </div>
);

export default Header;