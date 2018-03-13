import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
    <nav>
        <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/create" activeClassName="active">Create Expense</NavLink>
        <NavLink to="/expenses" activeClassName="active">Expenses</NavLink>
        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
    </nav>
)

export default Nav;