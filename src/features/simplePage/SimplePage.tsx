import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../routes/AppRoutes";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ISimplePageProps } from "./ISimplePageProps";
import styles from "./SimplePage.module.scss";
import { useEffect } from "react";

export const SimplePage: React.FC<ISimplePageProps> = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
