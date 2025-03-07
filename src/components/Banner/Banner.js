import React from 'react'
import './Banner.css'
import SearchBar from '../../assets/SearchBar'
import Arrow from '../../assets/Arrow'
import { IoIosCart } from "react-icons/io";
import { MdLastPage } from "react-icons/md";


function Banner() {
  return (
    <div>
        <div className="BannerParentDiv">
             <div className="BackgroundImage">
              
              <div className="BannerChildDiv">
                  <h1 className='Title1'>NO 1</h1>
                  <h4 className='Title2'>WHOLESALE IMMITTATION JEWELLERY</h4>
                  </div>
              <div className="Banner_Buttons">
                    <button className='Button_Explore'>Explore  <MdLastPage id='explore-logo'/></button>
                    <button className='Button_Cart'>Show Cart <IoIosCart id='cart-logo' />
                    </button>
              </div>
              <div className="SearchBar">
                <SearchBar></SearchBar>
                <div>search result</div>
              </div>
              <div className="MenuBar">
                <span>ALL CATEGORIES</span>
                <Arrow />
              </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Banner
