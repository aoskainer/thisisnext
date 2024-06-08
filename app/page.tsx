import { Header, Sidebar, Footer } from '@/components';
import styles from '@/styles/App.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.mainContent}>
        <Sidebar />
        <div className={styles.contentContainer}>
          <h1>Welcome to My Next.s Practice Dashboard</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
