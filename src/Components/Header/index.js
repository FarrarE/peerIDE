import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../Dropdown'
import { AiOutlineHome } from 'react-icons/ai';
import { ImLink } from 'react-icons/im';
import './styles/index.css';

function Header(props) {

    return (
        <div id="header-wrapper" className={props.theme}>
            <div id="nav-left">
                <div id="options">
                    <Dropdown download={props.download} title="File" theme={props.theme} />
                    <Dropdown title="Edit" undo={props.undo} redo={props.redo} copy={props.copy} theme={props.theme} />
                    <Dropdown title="Preferences" setTheme={props.setTheme} theme={props.theme} />
                    <Dropdown title="Help" />
                </div>
            </div>
            <div id="nav-right">
            </div>
        </div>
    );
}

export default Header;
