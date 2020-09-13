import React, { useState } from 'react';
// import './Footer.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

function Footer() {
    return (
    <div>
        <Navbar color="dark" expand="md">
            <div className ="text-white text-center w-100">No rights reserved</div>
        </Navbar>
    </div>
  );
}

export default Footer;
