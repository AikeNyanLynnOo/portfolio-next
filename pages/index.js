import { AboutSection } from "@/src/components/AboutSection";
import { BlogsSection } from "@/src/components/BlogsSection";
import { ContactForm } from "@/src/components/ContactFormComponent";
import { ContactSection } from "@/src/components/ContactSection";
import { DrawerNav } from "@/src/components/DrawerNavComponent";
import { FloatingNav } from "@/src/components/FloatingNavComponent";
import { LandingSection } from "@/src/components/LandingSection";
import { NavBar } from "@/src/components/NavBarComponent";
import { ProjectsSection } from "@/src/components/ProjectsSection";
import { SkillsSection } from "@/src/components/SkillsSection";
import { changeActiveNav } from "@/src/store/slices/generalSlice";
import { useRef } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Layout() {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
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

  return (
    <Fragment>
      <FloatingNav />
      <DrawerNav />
      <NavBar />

      <LandingSection scrollRef={activeNav === 0 ? scrollRef : null} />
      <AboutSection scrollRef={activeNav === 1 ? scrollRef : null} />
      <SkillsSection scrollRef={activeNav === 2 ? scrollRef : null} />
      <ProjectsSection scrollRef={activeNav === 3 ? scrollRef : null} />
      <BlogsSection scrollRef={activeNav === 4 ? scrollRef : null} />
      <ContactSection scrollRef={activeNav === 5 ? scrollRef : null} />

      {/* <ContactForm/> */}
    </Fragment>
  );
}
