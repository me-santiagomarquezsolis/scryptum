import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Logo.css'; // Archivo CSS personalizado para Header


const Logo = () => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt=""/>
                <span className="d-none d-lg-block">Scryptum</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
        </div> 
    );
};
        
export default Logo;