import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../Dropdown'

function Header() {
    useEffect(() => {
    }, []);
    return (
        <div id="header-wrapper">
            <div>
                <Dropdown title="File" />
            </div>
            <div>
                <Dropdown title="Edit" />
            </div>
            <div>
                <Dropdown title="View" />
            </div>
            <div>
                <Dropdown title="Run" />
            </div>
            <div>
                <Dropdown title="Help" />
            </div>
        </div>
    );
}

export default Header;
