import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../Dropdown'
import { AiOutlineHome } from 'react-icons/ai';
import { ImLink } from 'react-icons/im';
import './styles/index.css';

function Header(props) {

    return (
        <div id="header-wrapper">
            <div id="nav-left">
                <div id="options">
                    <Dropdown download={props.download} title="File" />
                    <Dropdown title="Edit" undo={props.undo} redo={props.redo} copy={props.copy}/>
                    <Dropdown title="Preferences" setTheme={props.setTheme} />
                    <Dropdown title="Help" />
                </div>
            </div>
            <div id="nav-right">
            </div>
        </div>
    );
}

export default Header;
