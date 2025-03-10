// BottomNavBar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './BottomNavBar.module.css'; // Import your CSS module
import { FaHome , FaInfoCircle, FaEnvelope} from 'react-icons/fa';


function BottomNavBar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
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
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}

export default BottomNavBar;