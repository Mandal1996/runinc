import React from 'react';
import Nav from './Nav/Nav';
import './header.scss';
import Logo from '../../../gfx/runinc_logo.svg';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo"/>
      <Nav />
    </header>
  )
}

export default Header;