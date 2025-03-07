import React from 'react'
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css'

const SearchBar = () => {
  return ( 
  
    <div className='input-wrapper'>
      <input placeholder="Search For...." />
      <FaSearch id="search-icon"/>
    </div>);
}

export default SearchBar

