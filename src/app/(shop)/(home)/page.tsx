import { CategoriesGrid, HomePageSlideshow } from "@/shop";
import styles from "./page.module.css";

const HomePage = () => {

  return (
    <div className={styles.homePage}>
      <HomePageSlideshow />
      
      <div className={styles.content}>
        <CategoriesGrid />
      </div>
    </div>
  );
};

export default HomePage;