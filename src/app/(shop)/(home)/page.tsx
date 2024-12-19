import { CategoriesGrid, HomePageSlideshow } from "@/shop";
import styles from "./page.module.css";

const HomePage = () => {

  return (
    <div className={styles.homePage}>
      <HomePageSlideshow />
      <CategoriesGrid />
    </div>
  );
};

export default HomePage;