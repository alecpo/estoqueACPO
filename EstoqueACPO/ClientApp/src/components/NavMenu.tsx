import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import './NavMenu.css';

const NavMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  return (
    <header>
      <Navbar className='navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3' light>
        <Container>
          <NavbarBrand to='/' href='/'>
            EstoqueACPO
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className='mr-2' />
          <Collapse className='d-sm-inline-flex flex-sm-row-reverse' isOpen={isOpen} navbar>
            <ul className='navbar-nav flex-grow'>
              <NavItem>
                <NavLink className='text-dark nav-link' to='/' href='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='text-dark nav-link' to='/NovoProduto' href='/NovoProduto'>
                  Cadastrar Produto
                </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavMenu;
