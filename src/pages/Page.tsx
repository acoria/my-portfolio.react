import { useRef, useState } from "react";
import { Banner } from "../features/banner/Banner";
import { CV } from "../features/cv/CV";
import { Header } from "../features/header/Header";
import { PageSection } from "../features/pageSection/PageSection";
import { ProjectList } from "../features/projects/projectList/ProjectList";
import { Skills } from "../features/skills/Skills";
import { Technologies } from "../features/technologies/Technologies";
import { Testimonials } from "../features/testimonials/Testimonials";
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
  const [scrollToTestimonialsSignal, triggerScrollToTestimonials] = useSignal();
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(
    undefined
  );

  const { t } = useTranslation();
  const navItems: INavItem[] = [
    {
      caption: t(texts.skills.title),
      scrollToSignal: scrollToSkillsSignal,
      signalTrigger: triggerScrollToSkills,
      component: <Skills />,
    },
    {
      caption: t(texts.projects.title),
      scrollToSignal: scrollToProjectsSignal,
      signalTrigger: triggerScrollToProjects,
      component: <ProjectList />,
    },
    {
      caption: t(texts.technologies.title),
      scrollToSignal: scrollToTechnologiesSignal,
      signalTrigger: triggerScrollToTechnologies,
      component: <Technologies />,
    },
    {
      caption: t(texts.cv),
      scrollToSignal: scrollToCVSignal,
      signalTrigger: triggerScrollToCV,
      component: <CV />,
    },
    {
      caption: t(texts.testimonials.title),
      scrollToSignal: scrollToTestimonialsSignal,
      signalTrigger: triggerScrollToTestimonials,
      component: <Testimonials />,
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
          className={styles.pageSection}
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
          <Banner />
        </div>
        <div className={styles.pageSections}>{navContent}</div>
      </div>
    </>
  );
};
