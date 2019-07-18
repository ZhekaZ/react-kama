import React from 'react';
import logo from "../../logo.svg";
import './header.scss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (
        <AppBar className='header' position="static">
            <Toolbar className='ToolbarBlock'>
                <IconButton edge="start" color="inherit" aria-label="Menu">
                    <img src={logo} className="logo" alt="logo"/>
                </IconButton>
                <Typography variant="h6">
                    React
                </Typography>

                <Typography className='LoginBlock' variant="h6">
                    {props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
