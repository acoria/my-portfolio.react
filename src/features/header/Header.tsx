import { useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Tabstrip } from "../../components/tabstrip/Tabstrip";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Language } from "../language/Language";
import styles from "./Header.module.scss";
import { IHeaderProps } from "./IHeaderProps";

export const Header: React.FC<IHeaderProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();
  const { onHeightChange } = { ...props };

  useEffect(() => {
    let height = ref.current?.scrollHeight ?? 0;
    //fix white line in top by reducing it by 1px
    onHeightChange?.(--height);
  }, [width, onHeightChange]);
  return (
    <div className={styles.header} ref={ref}>
      <Logo
        className={styles.logo}
        onClick={() => {
          props.onLogoClicked?.();
          props.onNavItemClick?.(undefined);
        }}
      />
      <div className={styles.navigation}>
        <Tabstrip
          captions={props.navItems}
          onTabSelect={(index) => {
            props.onNavItemClick?.(index);
          }}
          selectedTabIndex={props.selectedTabIndex}
        />
      </div>
      <Language className={styles.language} />
    </div>
  );
};
