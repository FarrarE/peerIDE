import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

function Header(props) {
    useEffect(() => {
    }, []);

    const File =
        <div className="dropdown-content">
            <div className="option" ><p>Open File</p></div>
            <hr></hr>
            <div className="option" onClick={props.download}><p>Save As...</p></div>
            <hr></hr>
            <div className="option"><p>Preferences</p></div>
        </div>



    const Edit =
        <div className="dropdown-content">
            <div className="option" ><p>Undo</p></div>
            <div className="option" onClick={props.download}><p>redo</p></div>
            <hr></hr>
            <div className="option"><p>Cut</p></div>
            <div className="option"><p>Copy</p></div>
            <div className="option"><p>Paste</p></div>
        </div>

    const Preferences =
        <div className="dropdown-content">
            <div className="option" ><p>Theme</p></div>
        </div>

    const Help =
        <div className="dropdown-content">
            <div className="option" ><p>About</p></div>
            <hr></hr>
        </div>

    const options = ["File", "Edit", "Preferences", "Help"];
    const component = [File, Edit, Preferences, Help];

    let menu = component[options.indexOf(props.title)];
    return (
        <div id="dropdown-wrapper">
            <div class="dropdown">
                <span>{props.title}</span>
                {menu}
            </div>
        </div>
    );
}

export default Header;



