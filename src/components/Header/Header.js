import React from 'react';
import './Header.css';
import { VscAccount } from "react-icons/vsc";



function Header() {
  return (
    <div className='ParentDiv'>
      <div className="ChildDiv">
        <h1 className="logo">MENDI FANCY</h1>
        <div className="loginPage">
          <span>Login</span>
          <VscAccount id="profile-icon" />
        </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Header
