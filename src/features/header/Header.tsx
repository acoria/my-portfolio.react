import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Tabstrip } from "../../components/tabstrip/Tabstrip";
import { Language } from "../language/Language";
import styles from "./Header.module.scss";
import { IHeaderProps } from "./IHeaderProps";

export const Header: React.FC<IHeaderProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState<number | undefined>(undefined);
  return (
    <div className={styles.header}>
      <Logo
        className={styles.logo}
        onClick={() => {
          props.onLogoClicked?.();
          setSelectedTab(undefined);
        }}
      />
      <div className={styles.navigation}>
        <Tabstrip
          captions={props.navItems}
          onTabSelect={(index) => {
            props.onNavItemClick?.(index);
            setSelectedTab(index);
          }}
          selectedTabIndex={selectedTab}
        />
      </div>
      <Language className={styles.language} />
    </div>
  );
};
