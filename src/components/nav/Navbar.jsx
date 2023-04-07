
import Nav, { Logo, Menu, MenuLink, Hamburger } from './Navbar.style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <i>{"<Mom'sKitchen/>"}</i>
        <span>Menu</span>
      </Logo> 

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        {/* <MenuLink to="items">Items</MenuLink> */}
        <MenuLink to="funzone">Funzone</MenuLink>
        <MenuLink to="login" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;