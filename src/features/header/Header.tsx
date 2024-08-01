import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Tabstrip } from "../../components/tabstrip/Tabstrip";
import { IHeaderProps } from "./IHeaderProps";

export const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} onClick={props.onLogoClicked} />
      <div className={styles.navigation}>
        <Tabstrip
          captions={props.navItems}
          onTabSelect={props.onNavItemClick}
        />
      </div>
      <div className={styles.language}>DE | EN</div>
    </div>
  );
};
