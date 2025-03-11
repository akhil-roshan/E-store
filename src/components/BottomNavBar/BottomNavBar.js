// BottomNavBar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './BottomNavBar.module.css'; // Import your CSS module
import { CiHome, CiLogin, CiSearch, CiShoppingBasket, CiShoppingCart } from "react-icons/ci";


function BottomNavBar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <CiHome /> },
    { path: '/search', label: 'Search', icon: <CiSearch /> },
    { path: '/login', label: 'Account', icon: <CiLogin /> },
    { path: '/contact', label: 'cart', icon: <CiShoppingCart /> },

  ];
  return (
    <footer className={styles.bottomNav}>
      <nav className={styles.navContainer}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.navItem} ${
              location.pathname === item.path ? styles.active : ''
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </footer>
  );
}

export default BottomNavBar;