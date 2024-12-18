import styles from "./page.module.css";

const HomePage = () => {

  return (
    <div className={styles.homePage}>
      {/* Background image */}
      <div className={styles.background}>
        <img src="/image/background/home-page-background.jpg" />
        <div className={styles.fadeOut} />
      </div>
      {/* Background image */}

      <h2 className={styles.title}>Get the best deals</h2>
    </div>
  );
};

export default HomePage;