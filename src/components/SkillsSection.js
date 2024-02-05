import { clsx } from "clsx";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Chip } from "@mui/material";
import { SkillIconWithText } from "../atoms/SkillIconWithText";
import { Fragment } from "react";
import { useEffect } from "react";
import { putOffsetTop } from "../store/slices/generalSlice";
import { useRef } from "react";

export const SkillsSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const dispatch = useDispatch();
  const ownRef = useRef(scrollRef || null);
  const { isLight } = useSelector((state) => state.theme);
  const skillsSectionClasses = useMemo(() => {
    return clsx({
      "h-screen": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
      "lg:flex": true,
      "flex-col": true,
      "justify-center": true,
      "items-center": true,
      block: true,
      ...customClasses,
    });
  }, [customClasses]);

  const skillTitleClasses = useMemo(() => {
    return clsx({
      "rounded-tl-xl": true,
      "rounded-br-xl": true,
      border: true,
      "border-ownMint-200": true,
      "px-5": true,
      "py-4": true,
      "lg:text-2xl": true,
      "text-xl": true,
      "font-thin": true,
      "w-fit": true,
      "mx-auto": true,
      "lg:mx-0": true,
    });
  }, []);

  const skillsIconContainerClasses = useMemo(() => {
    return clsx({
      "lg:w-4/6": true,
      "md:w-5/6": true,
      "w-full": true,
      "mx-auto": true,
      "py-4": true,
      flex: true,
      "flex-wrap": true,
      "justify-center": true,
    });
  }, []);

  useEffect(() => {
    dispatch(
      putOffsetTop({
        property: "skillSectionOffsetTop",
        value: ownRef.current.offsetTop,
      }),
    );
  }, [dispatch]);

  return (
    <ResponsiveContainer
      customClasses={{
        "bg-ownBlack-200": true,
        "dark:bg-ownBlack-100": true,
        "py-16": true,
      }}
      scrollRef={ownRef}
    >
      <div className={skillsSectionClasses}>
        <h2 className={skillTitleClasses}>Skills</h2>
        <p
          className="py-10 dark:text-ownMint-200 text-ownBlack-200 text-3xl text-center"
          style={{
            fontFamily: '"Varela Round", sans-serif',
          }}
        >
          The skills & tools I&apos;m really good at
        </p>
        <div className={skillsIconContainerClasses}>
          {[
            {
              icon: "/images/icons/javascript.svg",
              text: "Javascript",
              href: "https://www.javascript.com/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/typescript.svg",
              text: "Typescript",
              href: "https://www.typescriptlang.org/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/nextjs.svg",
              text: "NextJS",
              href: "https://nextjs.org/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/react.svg",
              text: "ReactJS",
              href: "https://react.dev/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/jquery.svg",
              text: "JQuery",
              href: "https://jquery.com/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/mui.svg",
              text: "Material UI",
              href: "https://mui.com/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/tailwind.svg",
              text: "Tailwind",
              href: "https://tailwindcss.com/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/bootstrap.svg",
              text: "Bootstrap",
              href: "https://getbootstrap.com/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/framer.svg",
              text: "Framer",
              href: "https://www.framer.com/motion/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/figma.svg",
              text: "Figma",
              href: "https://www.figma.com/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/npm.svg",
              text: "NPM",
              href: "https://www.npmjs.com/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/git.svg",
              text: "Git",
              href: "https://git-scm.com/",
              isMaterialIcon: false,
            },
          ].map((item, index) => (
            <Fragment key={index}>
              <SkillIconWithText
                icon={item.icon}
                isMaterialIcon={item.isMaterialIcon}
                text={item.text}
                href={item.href}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
};
