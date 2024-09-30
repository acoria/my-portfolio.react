import { useEffect, useState } from "react";
import { ProductAPI } from "../../api/ProductRepository";
import { LoadingSpinner } from "../../components/loadingSpinner/LoadingSpinner";
import { request } from "../../core/utils/request";
import { IProduct } from "../model/IProduct";
import { ProductList } from "../productList/ProductList";
import styles from "./ProductSection.module.scss";

export const ProductSection: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    request(async () => {
      const products = await new ProductAPI().findAll();
      setProducts(products);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner className={styles.loadingSpinner} />}
      {!isLoading && <ProductList products={products} />}
    </>
  );
};
