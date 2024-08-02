import { MutableRefObject, useRef, useState } from "react";
import { texts } from "../hooks/useTranslation/texts";
import { INavItem } from "../navItems/INavItems";
import { useTranslation } from "../hooks/useTranslation/useTranslation";
import { CV } from "../features/cv/CV";
import { Projects } from "../features/projects/Projects";
import { Header } from "../features/header/Header";
import { AboutMe } from "../features/aboutMe/AboutMe";
import styles from "./Page.module.scss";

export const Page: React.FC = () => {
  const refAboutMe = useRef(null);
  const refCV = useRef(null);
  const refProjects = useRef(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(
    undefined
  );
  const { t } = useTranslation();
  const navItems: INavItem<any>[] = [
    { caption: t(texts.cv), ref: refCV, component: <CV /> },
    { caption: t(texts.projects), ref: refProjects, component: <Projects /> },
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
          style={{ scrollMarginTop: headerHeightInPixel }}
          key={navItem.caption}
        >
          {navItem.component}
        </div>
      ))}
    </>
  );

  return (
    <>
      <Header
        navItems={navItems.map((navItem) => navItem.caption)}
        onNavItemClick={(index: number) => scrollTo(navItems[index].ref)}
        onLogoClicked={() => scrollTo(refAboutMe)}
        onHeightChange={setHeaderHeight}
      />
      <div
        style={{ marginTop: headerHeightInPixel }}
        className={styles.content}
      >
        <div ref={refAboutMe} style={{ scrollMarginTop: headerHeightInPixel }}>
          <AboutMe />
        </div>
        {navContent}
      </div>
    </>
  );
};
