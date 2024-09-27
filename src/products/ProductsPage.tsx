import { SimplePage } from "../features/simplePage/SimplePage";
import { ProductSection } from "./productSection/ProductSection";

export const ProductsPage: React.FC = () => {
  return <SimplePage children={<ProductSection />} />;
};
