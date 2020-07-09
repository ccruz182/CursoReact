import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='ui inverted large menu'>
      <NavLink activeClassName='ui item active' className='item' to='/tasks'>
        Tasks
      </NavLink>
      <NavLink activeClassName='ui item active' className='item' to='/jira'>
        JIRA
      </NavLink>
      <NavLink activeClassName='ui item active' className='item' to='/Hooks'>
        Hooks
      </NavLink>
    </div>
  );
};

export default Navbar;
