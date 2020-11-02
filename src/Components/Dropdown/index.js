import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

function Header(props) {
    useEffect(() => {
    }, []);

    const File =
        <div className="dropdown-content">
            <div className="option" >
                <div id="upload">
                    <input type="file" id="file-selector" accept=".txt,.js,.css,.scss," />
                </div>
                <p>Open File</p>
            </div>
            <hr></hr>
            <div className="option" onClick={props.download}><p>Download File</p></div>
        </div>



    const Edit =
        <div className="dropdown-content">
            <div className="option" onClick={props.undo} ><p>Undo</p></div>
            <div className="option" onClick={props.redo}><p>redo</p></div>
            <hr></hr>
            <div className="option"><p>Cut</p></div>
            <div className="option" onClick={props.copy}><p>Copy</p></div>
            <div className="option"><p>Paste</p></div>
        </div>

    const Preferences =
        <div className="dropdown-content">
            <div className="option" >
                <p>Theme</p>
                <div className="side-menu" >
                    <div className={"side-menu-content foreground " + props.theme}>
                        <div className="option" onClick={props.setTheme}><p>Monokai</p></div>
                        <div className="option" onClick={props.setTheme}><p>Github</p></div>
                        <div className="option" onClick={props.setTheme}><p>Terminal</p></div>
                        <div className="option" onClick={props.setTheme}><p>Tomorrow</p></div>
                        <div className="option" onClick={props.setTheme}><p>Twilight</p></div>
                        <div className="option" onClick={props.setTheme}><p>Textmate</p></div>
                        <div className="option" onClick={props.setTheme}><p>Solarized_dark</p></div>
                        <div className="option" onClick={props.setTheme}><p>Solarized_light</p></div>
                    </div>
                </div>
            </div>
        </div>

    const Help =
        <div className="dropdown-content">
            <div className="option" ><p>About</p></div>
        </div>

    const options = ["File", "Edit", "Preferences", "Help"];
    const component = [File, Edit, Preferences, Help];

    let menu = component[options.indexOf(props.title)];
    return (
        <div id="dropdown-wrapper" className={props.theme}>
            <div className="dropdown">
                <span>{props.title}</span>
                <div className="foreground">
                    {menu}
                </div>
            </div>
        </div>
    );
}

export default Header;



