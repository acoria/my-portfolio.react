import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { Product } from "../product/Product";
import { IProductListProps } from "./IProductListProps";
import styles from "./ProductList.module.scss";

export const ProductList: React.FC<IProductListProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.productList}>
      <h1 className={styles.title}>{t(texts.productList.title)}</h1>
      <div className={styles.products}>
        {props.products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </div>
  );
};
