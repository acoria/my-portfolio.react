import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Tabstrip } from "../../components/tabstrip/Tabstrip";

export const Header: React.FC = () => {
  const navItems = ["CV", "Projects"];

  const onNavItemSelect = (index: number)=>{
    switch (index) {
      case 1:
        
        break;
    
      default:
        break;
    }
  }

  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />
      <div className={styles.navigation}>
        <Tabstrip captions={navItems} onTabSelect={(index)=>onNavItemSelect}/>
      </div>
      <div className={styles.language}>DE | EN</div>
    </div>
  );
};
