import { useNavigate } from "react-router-dom";
import { Background } from "../background/Background";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ISimplePageProps } from "./ISimplePageProps";
import styles from "./SimplePage.module.scss";
import { AppRoutes } from "../../routes/AppRoutes";

export const SimplePage: React.FC<ISimplePageProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.simplePage}>
      <Header
        className={styles.header}
        onLogoClicked={() => navigate(AppRoutes.home.toPath())}
      />
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  );
};
