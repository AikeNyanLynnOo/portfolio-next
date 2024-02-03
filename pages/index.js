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
import { useRef } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Layout() {
  const scrollRef = useRef();
  const { activeNav, isDrawerOpen } = useSelector((state) => state.general);

  useEffect(() => {
    // scrollRef.current?.scrollIntoView({
    //   behavior: "smooth",
    //   // block: "end",
    //   // inline: "nearest",
    // });

    const element = scrollRef.current;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 50;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, [activeNav]);
  useEffect(() => {
    console.log("is drawer open>>", isDrawerOpen);
  }, [isDrawerOpen]);

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
    </Fragment>
  );
}
