import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

function Header(props) {
    useEffect(() => {
    }, []);

    const File =    <div className="dropdown-content">
                        <div className="option" ><p>Open File</p></div>
                        <hr></hr>
                        <div className="option" onClick={props.download}><p>Save As...</p></div>
                        <hr></hr>
                        <div className="option"><p>Preferences</p></div>
                    </div>

    return (
        <div id="dropdown-wrapper">
            <div class="dropdown">
                <span>{props.title}</span>
                {File}
            </div>
        </div>
    );
}

export default Header;



