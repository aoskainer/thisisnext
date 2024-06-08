import React from 'react';
import styles from '@/styles/Sidebar.module.css';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li><Link href="/pokemon">SSR Demo Page</Link></li>
          <li><Link href="/pokemon2">CSR Demo Page</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
