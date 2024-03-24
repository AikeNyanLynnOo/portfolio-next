import { AboutSection } from "@/src/components/AboutSection";
import { BlogsSection } from "@/src/components/BlogsSection";
import { Bubbles } from "@/src/components/Bubbles";
import { ContactForm } from "@/src/components/ContactFormComponent";
import { ContactSection } from "@/src/components/ContactSection";
import { DrawerNav } from "@/src/components/DrawerNavComponent";
import { FloatingNav } from "@/src/components/FloatingNavComponent";
import { LandingSection } from "@/src/components/LandingSection";
import { NavBar } from "@/src/components/NavBarComponent";
import { ProjectsSection } from "@/src/components/ProjectsSection";
import { SkillsSection } from "@/src/components/SkillsSection";
import { changeActiveNav } from "@/src/store/slices/generalSlice";
import { switchThemeRequest } from "@/src/store/slices/themeSlice";
import { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useDispatch, useSelector } from "react-redux";
import HashLoader from "react-spinners/HashLoader";

export default function Layout() {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const {
    activeNav,
    isDrawerOpen,
    isScrolling,
    landingSectionOffsetTop,
    aboutSectionOffsetTop,
    skillSectionOffsetTop,
    projectsSectionOffsetTop,
    blogsSectionOffsetTop,
    contactSectionOffsetTop,
  } = useSelector((state) => state.general);

  useEffect(() => {
    // scrollRef.current?.scrollIntoView({
    //   behavior: "smooth",
    //   // block: "end",
    //   // inline: "nearest",
    // });
    // const element = scrollRef.current;
    // const elementPosition = element.getBoundingClientRect().top;
    // const offsetPosition = elementPosition + window.pageYOffset - 50;
    // window.scrollTo({
    //   top: 100,
    //   behavior: "smooth",
    // });
  }, [activeNav]);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;

      if (!isScrolling) {
        return false;
      }

      switch (true) {
        case scrolled < landingSectionOffsetTop:
          dispatch(changeActiveNav(0));
          break;
        case landingSectionOffsetTop < scrolled &&
          scrolled < aboutSectionOffsetTop:
          dispatch(changeActiveNav(1));
          break;
        case aboutSectionOffsetTop < scrolled &&
          scrolled < skillSectionOffsetTop + 100:
          console.log("skill section");
          dispatch(changeActiveNav(2));
          break;
        case skillSectionOffsetTop < scrolled &&
          scrolled < projectsSectionOffsetTop + 100:
          console.log("projects section");
          dispatch(changeActiveNav(3));
          break;
        case projectsSectionOffsetTop < scrolled &&
          scrolled < blogsSectionOffsetTop + 100:
          console.log("blogs section");
          dispatch(changeActiveNav(4));
          break;
        case scrolled > contactSectionOffsetTop + 100:
          console.log("contact section");
          dispatch(changeActiveNav(5));
          break;
        default:
          break;
      }
    });
  }, [
    dispatch,
    isScrolling,
    landingSectionOffsetTop,
    aboutSectionOffsetTop,
    skillSectionOffsetTop,
    projectsSectionOffsetTop,
    blogsSectionOffsetTop,
    contactSectionOffsetTop,
  ]);
  useEffect(() => {
    dispatch(
      switchThemeRequest({
        theme:
          (new Date().getHours() > 6 &&
            new Date().getHours() < 20 &&
            "light") ||
          "dark",
      }),
    );
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <Fragment>
      {loading && (
        <div className="z-20 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-slate-50">
          <HashLoader color="#15F6D6" />
        </div>
      )}
      <FloatingNav />
      {!loading && (
        <Fragment>
          <DrawerNav />
          <NavBar />
          <LandingSection scrollRef={activeNav === 0 ? scrollRef : null} />
          <AboutSection scrollRef={activeNav === 1 ? scrollRef : null} />
          <SkillsSection scrollRef={activeNav === 2 ? scrollRef : null} />
          <ProjectsSection scrollRef={activeNav === 3 ? scrollRef : null} />
          <BlogsSection scrollRef={activeNav === 4 ? scrollRef : null} />
          <ContactSection scrollRef={activeNav === 5 ? scrollRef : null} />
        </Fragment>
      )}

      {/* <ContactForm/> */}
      <AnimatedCursor
        innerSize={14}
        outerSize={13}
        color={isLight ? "51, 187, 197" : "21, 246, 214"}
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={4}
        trailingSpeed={12}
        outerStyle={
          {
            // border: "3px solid var(--cursor-color)",
          }
        }
        innerStyle={
          {
            // backgroundColor: "var(--cursor-color)",
          }
        }
      />
    </Fragment>
  );
}
