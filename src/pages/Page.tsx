import { useRef, useState } from "react";
import { CV } from "../features/cv/CV";
import { Header } from "../features/header/Header";
import { Headline } from "../features/headline/Headline";
import { PageSection } from "../features/pageSection/PageSection";
import { Projects } from "../features/projects/Projects";
import { Skills } from "../features/skills/Skills";
import { Technologies } from "../features/technologies/Technologies";
import { useSignal } from "../hooks/useSignal";
import { texts } from "../hooks/useTranslation/texts";
import { useTranslation } from "../hooks/useTranslation/useTranslation";
import { INavItem } from "../navItems/INavItems";
import styles from "./Page.module.scss";

export const Page: React.FC = () => {
  const [visibleTabs, setVisibleTabs] = useState<number[]>([]);
  const refHeadline = useRef<HTMLDivElement>(null);
  const [scrollToCVSignal, triggerScrollToCV] = useSignal();
  const [scrollToProjectsSignal, triggerScrollToProjects] = useSignal();
  const [scrollToSkillsSignal, triggerScrollToSkills] = useSignal();
  const [scrollToTechnologiesSignal, triggerScrollToTechnologies] = useSignal();
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(
    undefined
  );

  const { t } = useTranslation();
  const navItems: INavItem[] = [
    {
      caption: t(texts.cv),
      scrollToSignal: scrollToCVSignal,
      signalTrigger: triggerScrollToCV,
      component: <CV />,
    },
    {
      caption: t(texts.skills),
      scrollToSignal: scrollToSkillsSignal,
      signalTrigger: triggerScrollToSkills,
      component: <Skills />,
    },
    {
      caption: t(texts.technologies),
      scrollToSignal: scrollToTechnologiesSignal,
      signalTrigger: triggerScrollToTechnologies,
      component: <Technologies />,
    },
    {
      caption: t(texts.projects),
      scrollToSignal: scrollToProjectsSignal,
      signalTrigger: triggerScrollToProjects,
      component: <Projects />,
    },
  ];

  const scrollToHeadline = () => {
    refHeadline.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const addTabToVisibleTabs = (tabIndex: number) =>
    setVisibleTabs((previous) => {
      const index = previous.findIndex((item) => item === tabIndex);
      if (index === -1) {
        const newTabs = [...previous];
        newTabs.push(tabIndex);
        return newTabs;
      } else {
        //ignore if it already exists
        return previous;
      }
    });

  const headerHeightInPixel = headerHeight ? `${headerHeight}px` : `0px`;
  const navContent = (
    <>
      {navItems.map((navItem, index) => (
        <PageSection
          key={`${navItem.caption}_${index}`}
          title={navItem.caption}
          onChangeViewportVisibility={(visible: boolean) => {
            if (visible) {
              addTabToVisibleTabs(index);
            } else {
              setVisibleTabs((previous) => {
                const foundIndex = previous.findIndex((item) => item === index);
                if (foundIndex === -1) {
                  return previous;
                } else {
                  const newTabs = [...previous];
                  newTabs.splice(foundIndex, 1);
                  return newTabs;
                }
              });
            }
          }}
          topOffsetInPixel={headerHeightInPixel}
          scrollIntoViewSignal={navItems[index].scrollToSignal}
          className={styles.section}
        >
          <h1 className={styles.sectionTitle}>{navItem.caption}</h1>
          {navItem.component}
        </PageSection>
      ))}
    </>
  );

  return (
    <>
      <Header
        navItems={navItems.map((navItem) => navItem.caption)}
        onNavItemClick={(index) => {
          if (index === undefined) {
            return;
          }
          navItems[index].signalTrigger();
          addTabToVisibleTabs(index);
        }}
        onLogoClicked={scrollToHeadline}
        onHeightChange={setHeaderHeight}
        selectedTabIndex={visibleTabs[visibleTabs.length - 1]}
      />
      <div
        style={{ marginTop: headerHeightInPixel }}
        className={styles.content}
      >
        <div ref={refHeadline} style={{ scrollMarginTop: headerHeightInPixel }}>
          <Headline />
        </div>
        <div className={styles.sections}>{navContent}</div>
      </div>
    </>
  );
};
