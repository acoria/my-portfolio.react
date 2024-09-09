import { IBurgerMenuProps } from "./IBurgerMenuProps";
import { ReactComponent as BurgerMenuIcon } from "../../assets/icons/burger_menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { useToggle } from "../../hooks/useToggle";
import styles from "./BurgerMenu.module.scss";
import { style } from "../../core/utils/style";

export const BurgerMenu: React.FC<IBurgerMenuProps> = (props) => {
  const [isOpen, toggleIsOpen] = useToggle();

  const icon = isOpen ? (
    <CloseIcon className={styles.buttonIcon} onClick={() => toggleIsOpen()} />
  ) : (
    <BurgerMenuIcon
      className={styles.buttonIcon}
      onClick={() => toggleIsOpen()}
    />
  );

  const menuEntries = (
    <div
      style={{ top: props.topPosition }}
      className={style(styles.menuEntries, isOpen ? styles.openMenu : "")}
    >
      {props.captions.map((caption, index) => (
        <div
        className={styles.menuEntry}
          key={index}
          onClick={() => {
            props.onTabSelect?.(index);
            toggleIsOpen();
          }}
        >
          {caption}
        </div>
      ))}
    </div>
  );
  return (
    <div className={styles.burgerMenu}>
      {icon}
      {menuEntries}
    </div>
  );
};
