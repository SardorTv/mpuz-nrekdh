import React, { useState  } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/list/">List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/add/">Add</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="/auth/">Auth</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default Header;