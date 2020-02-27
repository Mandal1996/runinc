import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Search from './search/Search';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/events" className="navbar_link" activeClassName="navbar_link--active">Events</NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="navbar_link" activeClassName="navbar_link--active">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/contactus" className="navbar_link" activeClassName="navbar_link--active">Contact us</NavLink>
        </li>
      </ul>
      <Search />
    </nav>
  )
}

export default Nav;