import { MutableRefObject, useRef } from "react";
import styles from "./App.module.scss";
import { Header } from "./features/header/Header";
import { CV } from "./pages/CV";
import { Projects } from "./pages/Projects";
import { AboutMe } from "./pages/AboutMe";
import { INavItem } from "./navItems/INavItems";

function App() {
  const refAboutMe = useRef(null);
  const refCV = useRef(null);
  const refProjects = useRef(null);
  const navItems: INavItem<any>[] = [
    { caption: "CV", ref: refCV, component: <CV /> },
    { caption: "Projects", ref: refProjects, component: <Projects /> },
  ];

  const scrollTo = (ref: MutableRefObject<any>) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navContent = (
    <>
      {navItems.map((navItem) => (
        <div ref={navItem.ref} className={styles.navContent}>
          {navItem.component}
        </div>
      ))}
    </>
  );

  return (
    <div className={styles.app}>
      <Header
        navItems={navItems.map((navItem) => navItem.caption)}
        onNavItemClick={(index) => scrollTo(navItems[index].ref)}
        onLogoClicked={() => scrollTo(refAboutMe)}
      />
      <div className={styles.content}>
        <div ref={refAboutMe} className={styles.navContent}>
          <AboutMe />
        </div>
        {navContent}
      </div>
    </div>
  );
}

export default App;
