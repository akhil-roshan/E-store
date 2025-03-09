import React from 'react'
import './Appfooter.css'
import { CiHome, CiLogin, CiSearch, CiShoppingBasket, CiShoppingCart } from "react-icons/ci";

function Appfooter() {
  return (
    <div>
      <div className="appfooter">
        <div className="navbuttons">
            <span>home <CiHome/> </span>
            <span>search <CiSearch /></span>
            <span>login <CiLogin /></span>
            <span>cart <CiShoppingCart/></span>
        </div>
      </div>
    </div>
  )
}

export default Appfooter
