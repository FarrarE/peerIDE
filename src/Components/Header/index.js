import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../Dropdown'
import { AiOutlineHome } from 'react-icons/ai';
import { ImLink } from 'react-icons/im';
import './styles/index.css';

function Header() {

    return (
        <div id="header-wrapper">
            <div id="nav-left">
                <div id="home">
                    <AiOutlineHome />
                </div>
                <div id="options">
                    <Dropdown title="File" />
                    <Dropdown title="Edit" />
                    <Dropdown title="View" />
                    <Dropdown title="Run" />
                    <Dropdown title="Help" />
                </div>
            </div>
            <div id="nav-right">
                <div id="link">
                    <ImLink />
                </div>
                <div id="login">
                    Login
                </div>
            </div>
        </div>
    );
}

export default Header;
