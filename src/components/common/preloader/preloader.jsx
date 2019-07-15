import React from "react";
import s from "./preloader.module.scss";
import logo from '../../../logo.svg';

const Preloader = props => {
    return  <div className={s.loader}><img src={logo} alt=""/></div>
};

export default Preloader;
