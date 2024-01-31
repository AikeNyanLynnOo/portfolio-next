import { ContactForm } from "@/src/components/ContactFormComponent";
import { LandingSection } from "@/src/components/LandingSection";
import { NavBar } from "@/src/components/NavBarComponent";
import { Fragment } from "react";

export default function Layout() {
  return (
    <Fragment>
      <NavBar />
      <LandingSection />
      <ContactForm />
    </Fragment>
  );
}
