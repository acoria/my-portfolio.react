import { MutableRefObject, useEffect, useRef, useState } from "react";
import { CV } from "../features/cv/CV";
import { Header } from "../features/header/Header";
import { Headline } from "../features/headline/Headline";
import { Projects } from "../features/projects/Projects";
import { texts } from "../hooks/useTranslation/texts";
import { useTranslation } from "../hooks/useTranslation/useTranslation";
import { INavItem } from "../navItems/INavItems";
import styles from "./Page.module.scss";
import { Technologies } from "../features/technologies/Technologies";
import { Skills } from "../features/skills/Skills";
import { useElementMovedIntoViewportObserver } from "../hooks/useElementMovedIntoViewportObserver";

export const Page: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number | undefined>(undefined);
  const refAboutMe = useRef<HTMLDivElement>(null);
  const refCV = useRef<HTMLDivElement>(null);
  const refProjects = useRef<HTMLDivElement>(null);
  const refSkills = useRef<HTMLDivElement>(null);
  const refTechnologies = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(
    undefined
  );

  const { isVisible: projectsVisible } =
    useElementMovedIntoViewportObserver(refProjects);

  useEffect(() => {
    projectsVisible && setSelectedTab(3);
  }, [projectsVisible]);

  const { t } = useTranslation();
  const navItems: INavItem<any>[] = [
    { caption: t(texts.cv), ref: refCV, component: <CV /> },
    { caption: t(texts.skills), ref: refSkills, component: <Skills /> },
    {
      caption: t(texts.technologies),
      ref: refTechnologies,
      component: <Technologies />,
    },
    { caption: t(texts.projects), ref: refProjects, component: <Projects /> },
  ];
  // const findIndexOfNavItemByElementRef

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
          <h1 className={styles.sectionTitle}>{navItem.caption}</h1>
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
        selectedTabIndex={selectedTab}
        onTabSelect={(index) => setSelectedTab(index)}
      />
      <div
        style={{ marginTop: headerHeightInPixel }}
        className={styles.content}
      >
        <div ref={refAboutMe} style={{ scrollMarginTop: headerHeightInPixel }}>
          <Headline />
        </div>
        <div className={styles.sections}>{navContent}</div>
      </div>
    </>
  );
};
