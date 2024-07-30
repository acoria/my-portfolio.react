import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />
      <div className={styles.navigation}>Navigation</div>
      <div className={styles.language}>DE|EN</div>
    </div>
  );
};
