import { useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Tabstrip } from "../../components/tabstrip/Tabstrip";
import { Language } from "../language/Language";
import styles from "./Header.module.scss";
import { IHeaderProps } from "./IHeaderProps";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const Header: React.FC<IHeaderProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState<number | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();
  const { onHeightChange } = { ...props };

  useEffect(() => {
    onHeightChange?.(ref.current?.offsetHeight ?? 0);
  }, [width, onHeightChange]);

  return (
    <div className={styles.header} ref={ref}>
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
