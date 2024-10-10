import { useNavigate } from "react-router-dom";
import { ReactComponent as ConfusedSmiley } from "../assets/confused_smiley.svg";
import { Header } from "../features/header/Header";
import { AppRoutes } from "../routes/AppRoutes";
import styles from "./ErrorPage.module.scss";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const navigateHome = () => navigate(AppRoutes.home.toPath());

  return (
    <div className={styles.errorPage}>
      <Header
        className={styles.header}
        onLogoClicked={navigateHome}
        hideLanguage
      />
      <div className={styles.content}>
        <ConfusedSmiley className={styles.smiley} />
        <h1 className={styles.error_404}>404</h1>
        <h1>Hm..the site you are looking for does not seem to exist</h1>
        <h2 className={styles.tryAgain}>Let's try again from the start</h2>
        <button className={styles.homeButton} onClick={navigateHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
};
