import React from 'react';
import {NavLink} from "react-router-dom";
import s from './nav.scss';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    );
};

export default Nav;
