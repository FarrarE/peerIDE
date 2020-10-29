import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

function Header(props) {
    useEffect(() => {
    }, []);
    return (
        <div id="dropdown-wrapper">
            <div class="dropdown">
                <span>{props.title}</span>
                <div class="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
        </div>
    );
}

export default Header;



