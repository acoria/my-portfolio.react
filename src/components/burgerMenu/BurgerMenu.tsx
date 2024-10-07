import { ReactComponent as BurgerMenuIcon } from "../../assets/icons/burger_menu.svg";
import { style } from "../../core/utils/style";
import { useToggle } from "../../hooks/useToggle";
import styles from "./BurgerMenu.module.scss";
import { IBurgerMenuProps } from "./IBurgerMenuProps";

export const BurgerMenu: React.FC<IBurgerMenuProps> = (props) => {
  const [isOpen, toggleIsOpen] = useToggle();

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
            props.onEntrySelect?.(index);
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
      <BurgerMenuIcon
        className={styles.buttonIcon}
        onClick={() => toggleIsOpen()}
      />
      {isOpen && (
        <div className={styles.backdrop} onClick={() => toggleIsOpen(false)} />
      )}
      {menuEntries}
    </div>
  );
};
