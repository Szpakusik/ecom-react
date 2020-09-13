import React, { useState } from 'react';
// import './Header.css';
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

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
    <div>
        <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">MEC</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            </Nav>
            <NavbarText>Mini E-Commerce</NavbarText>
        </Collapse>
        </Navbar>
    </div>
  );
}

export default Header;
