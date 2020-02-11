import React from 'react';
import logo from '../img/logo.png'
import dataIcon from '../img/dataIcon.svg'
import icon4 from '../img/icon4.svg'
import logOut from '../img/logOut.svg'
import NavBarHeader from './NavBarHeader';
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
        <div className="headerContainer">
        <NavBarHeader/>
            <nav className="nav flex">
            <Link to="/">
                <img src={logo} className="logo" alt="logo"/>
            </Link>
                <span className="logOutContainer flex">
                    <img src={dataIcon} className="dataIcon dataIconHeader Iconone" alt="button for data page" />
                    <img src={icon4} className="dataIcon dataIconHeader" alt="button for data page" />
                    <div className="dataIcon navIconNumber">4</div>
                    <div className="dataIcon navIconLine"></div>
                    <div className="navIconname">M</div>
                    <div className="navIconnameText">MAURO</div>
                    <img src={logOut} className="dataIcon dataIconHeader iconLogout" alt="button for log out" />
                </span>
            </nav>
        </div>
        </>
    );
  }
  
  export default Header;
  