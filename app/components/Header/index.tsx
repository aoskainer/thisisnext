import React from 'react';
import styles from '@/styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
