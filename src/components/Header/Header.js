import React from 'react';
import {NavLink} from 'react-router-dom'
import './Header.css'

const Header = () => {
    const activeStyle ={
        textDecoration: 'none',
        margin: '1rem',
        color: 'black',
        fontWeight: 'bolder',
        fontSize: '2rem'

    };
    return (
        <div id='header-section'>
            <NavLink to='/home' style={activeStyle}>Home</NavLink>
            <NavLink to='/meals' style={activeStyle}>Meals</NavLink> 
        </div>
    );
};

export default Header;