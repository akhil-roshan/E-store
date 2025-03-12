import React, {useState} from 'react';
import './Banner.css'
import SearchBar from '../../assets/SearchBar'
import { IoIosCart } from "react-icons/io";
import { MdLastPage } from "react-icons/md";
import CartSlide from '../../assets/CartSlide';



function Banner() {

  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
      setIsCartVisible(!isCartVisible);
  };

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
                    <button className='Button_Cart' onClick={toggleCart}>Show Cart <IoIosCart id='cart-logo' />
                    </button>
                    {isCartVisible && <CartSlide />}
              </div>
              <div className="SearchBar">
                <SearchBar></SearchBar>
                <div>search result</div>
              </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Banner
