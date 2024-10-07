import { useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Tabstrip } from "../../components/tabstrip/Tabstrip";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Language } from "../../components/language/Language";
import styles from "./Header.module.scss";
import { IHeaderProps } from "./IHeaderProps";
import { useScreenSize } from "../../hooks/useScreenSize";
import { BurgerMenu } from "../../components/burgerMenu/BurgerMenu";
import { style } from "../../core/utils/style";

export const Header: React.FC<IHeaderProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();
  const { isSmallScreen } = useScreenSize();
  const { onHeightChange } = { ...props };

  useEffect(() => {
    let height = ref.current?.scrollHeight ?? 0;
    //fix white line in top by reducing it by 1px
    onHeightChange?.(--height);
  }, [width, onHeightChange]);

  return (
    <div className={style(styles.header, props.className)} ref={ref}>
      {isSmallScreen && props.navItems && (
        <BurgerMenu
          captions={props.navItems}
          onEntrySelect={(index) => {
            props.onNavItemClick?.(index);
          }}
          topPosition={ref.current?.scrollHeight}
        />
      )}
      <Logo
        className={styles.logo}
        onClick={() => {
          props.onLogoClicked?.();
          props.onNavItemClick?.(undefined);
        }}
      />
      {!isSmallScreen && props.navItems && (
        <div className={styles.navigation}>
          <Tabstrip
            captions={props.navItems}
            onTabSelect={(index) => {
              props.onNavItemClick?.(index);
            }}
            selectedTabIndex={props.selectedTabIndex}
          />
        </div>
      )}
      <Language className={styles.language} />
    </div>
  );
};
