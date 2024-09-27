import { Background } from "../features/background/Background";
import { SimplePage } from "../features/simplePage/SimplePage";
import { ProductSection } from "./productSection/ProductSection";
import styles from "./ProductsPage.module.scss";

export const ProductsPage: React.FC = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <Background />
      <SimplePage children={<ProductSection />} />
    </div>
  );
};
