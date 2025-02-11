import { CategoriesGrid } from '@/shop';
import styles from './page.module.css';

const CategoriesPage = () => {
  return (
    <div className={styles.categoriesPage}>
      <h1 className={styles.title}>Explore categories</h1>
      <CategoriesGrid></CategoriesGrid>
    </div>
  );
}

export default CategoriesPage;