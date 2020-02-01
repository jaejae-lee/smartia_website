import React from 'react';
import logo from '../img/logo.png'
import dataIcon from '../img/dataIcon.svg'
import icon4 from '../img/icon4.svg'
import logOut from '../img/logOut.svg'
import NavBarHeader from './NavBarHeader';

function Header() {
    return (
        <>
        <div className="headerContainer">
        <NavBarHeader/>
            <nav className="nav flex">
                <img src={logo} className="logo" alt="logo"/>
                <span className="logOutContainer flex">
                    <img src={dataIcon} className="dataIcon dataIconHeader" alt="button for data page" />
                    {/* <span className="dataIconHeaderNoti"></span> */}
                    <img src={icon4} className="dataIcon dataIconHeader" alt="button for data page" />
                    {/* <span className="dataIconHeaderNoti">21</span> */}
                    <img src={logOut} className="dataIcon dataIconHeader iconLogout" alt="button for log out" />
                </span>
            </nav>
        </div>
        </>
    );
  }
  
  export default Header;
  