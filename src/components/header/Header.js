import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'; // Archivo CSS personalizado para Header
import Logo from './Logo.js'
import Notifications from './Notifications.js';
import Messages from './Messages.js';


const Header = () => {

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <Logo/>
            <Notifications/>
            <Messages/> 
        </header> 
    );
};

export default Header;
