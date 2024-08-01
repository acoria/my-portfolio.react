import { MutableRefObject, useRef, useState } from "react";
import styles from "./App.module.scss";
import { AppContext } from "./context/AppContext";
import { Header } from "./features/header/Header";
import { useLanguageStorage } from "./hooks/useLanguage/useLanguageStorage";
import { texts } from "./hooks/useTranslation/texts";
import { INavItem } from "./navItems/INavItems";
import { AboutMe } from "./pages/AboutMe";
import { CV } from "./pages/CV";
import { Projects } from "./pages/Projects";

function App() {
  const refAboutMe = useRef(null);
  const refCV = useRef(null);
  const refProjects = useRef(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(
    undefined
  );
  const navItems: INavItem<any>[] = [
    { caption: texts.cv, ref: refCV, component: <CV /> },
    { caption: texts.projects, ref: refProjects, component: <Projects /> },
  ];

  const scrollTo = (ref: MutableRefObject<any>) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const headerHeightInPixel = headerHeight ? `${headerHeight}px` : `0px`;

  const navContent = (
    <>
      {navItems.map((navItem) => (
        <div
          ref={navItem.ref}
          className={styles.navContent}
          style={{ scrollMarginTop: headerHeightInPixel }}
          key={navItem.caption}
        >
          {navItem.component}
        </div>
      ))}
    </>
  );

  return (
    <AppContext.Provider value={{ language: useLanguageStorage() }}>
      <div className={styles.app}>
        <Header
          navItems={navItems.map((navItem) => navItem.caption)}
          onNavItemClick={(index) => scrollTo(navItems[index].ref)}
          onLogoClicked={() => scrollTo(refAboutMe)}
          onHeightChange={setHeaderHeight}
        />
        <div
          className={styles.content}
          style={{ marginTop: headerHeightInPixel }}
        >
          <div
            ref={refAboutMe}
            style={{ scrollMarginTop: headerHeightInPixel }}
          >
            <AboutMe />
          </div>
          {navContent}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
