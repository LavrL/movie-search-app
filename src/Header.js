import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <h2 className="header__text">{props.text}</h2>
        </header>
    )
}

export default Header;
