import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>

    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="is-active" to="/">Go home</NavLink>
    <NavLink exact={true} activeClassName="is-active" to="/create">create expense</NavLink>
    <NavLink exact={true} activeClassName="is-active" to="/help">help page</NavLink>
  </header>
)

export default Header;