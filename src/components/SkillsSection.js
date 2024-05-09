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
import { Bubbles } from "./Bubbles";
import { CodeText } from "../atoms/CodeText";

export const SkillsSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const dispatch = useDispatch();
  const ownRef = useRef(scrollRef || null);
  const { isLight } = useSelector((state) => state.theme);

  const dots = useMemo(() => {
    const randomArray = [];
    for (let i = 0; i < 5; i++) {
      randomArray.push(Math.floor(Math.random() * 25) + 1);
    }
    return randomArray;
  }, []);

  const skillsSectionClasses = useMemo(() => {
    return clsx({
      "[&>*]:z-10": true,
      // "h-screen": true,
      "h-full": true,
      "w-full": true,
      // "min-h-[calc(100vh-80px)]": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
      "lg:flex": true,
      "flex-col": true,
      "justify-center": true,
      // "bg-slate-200" : true,
      "items-center": true,
      block: true,
      ...customClasses,
    });
  }, [customClasses]);

  const skillTitleClasses = useMemo(() => {
    return clsx({
      "bg-white": true,
      "dark:bg-ownBlack-100": true,
      "rounded-tl-xl": true,
      "rounded-br-xl": true,
      border: true,
      "border-ownMint-200": true,
      "px-5": true,
      "py-4": true,
      "lg:text-2xl": true,
      "text-xl": true,
      // "font-thin": true,
      "w-fit": true,
      "mx-auto": true,
      "lg:mx-0": true,
    });
  }, []);

  const skillsIconContainerClasses = useMemo(() => {
    return clsx({
      // "lg:w-4/6": true,
      // "md:w-5/6": true,
      "w-full": true,
      "mx-auto": true,
      "py-4": true,
      flex: true,
      "flex-wrap": true,
      "justify-center": true,
    });
  }, []);
  const aboutMeTitleClasses = useMemo(() => {
    return clsx({
      "bg-white": true,
      "dark:bg-ownBlack-100": true,
      "rounded-tl-xl": true,
      "rounded-br-xl": true,
      border: true,
      "border-ownMint-200": true,
      "px-5": true,
      "py-4": true,
      "lg:text-2xl": true,
      "text-xl": true,
      // "font-thin": true,
      "w-fit": true,
      "mx-auto": true,
      "lg:mx-0": true,
    });
  }, []);
  const aboutMeTextClasses = useMemo(() => {
    return clsx({
      "rounded-xl": true,
      "px-5": true,
      "py-4": true,
      "mt-5": true,
      // "font-thin": true,
      "rounded-xl": true,
      // "bg-ownBlack-100": true,
      // "dark:bg-white": true,
      "bg-clip-padding": true,
      "backdrop-filter": true,
      "backdrop-blur-3xl": true,
      // "bg-opacity-40": true,
      "bg-gray-100": true,
      "dark:bg-ownBlack-100": true,
      // border: true,
      // "border-gray-60": true,
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
      scrollRef={ownRef}
      customClasses={{
        "bg-ownBlack-200": true,
        "dark:bg-ownBlack-100": true,
        "py-16": true,
        // "box-border": true,
      }}
    >
      <div className={skillsSectionClasses}>
        <h2 className={skillTitleClasses}>Skills</h2>
        <div
          className="py-10 block dark:text-ownMint-200 text-ownBlack-200 text-3xl text-center"
          style={
            {
              // fontFamily: '"Varela Round", sans-serif',
            }
          }
        >
          The skills & tools I&apos;m really good at
        </div>
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
              icon: "/images/icons/nodejs.svg",
              text: "NodeJS",
              href: "https://nodejs.org/en",
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
              icon: "/images/icons/react-native.svg",
              text: "React Native",
              href: "https://reactnative.dev/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/storybook.svg",
              text: "StoryBook",
              href: "https://storybook.js.org/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/styled-components.svg",
              text: "Styled Components",
              href: "https://www.styled-components.com/",
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
            {
              icon: "/images/icons/gcp.svg",
              text: "Google Cloud",
              href: "https://cloud.google.com/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/docker.svg",
              text: "Docker",
              href: "https://www.docker.com/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/puppeteer.png",
              text: "Puppeteer",
              href: "https://pptr.dev/",
              isMaterialIcon: false,
            },
            {
              icon: "/images/icons/cheerio.svg",
              text: "Cheerio",
              href: "https://cheerio.js.org/",
              isMaterialIcon: false,
            },
          ].map((item, index) => (
            // <motion.div
            //   variants={fadeInAnimationVariants}
            //   initial="initial"
            //   animate="animate"
            //   whileInView="animate"
            //   // viewport={{
            //   //   once: true,
            //   // }}
            //   key={index}
            //   custom={index}
            //   className="p-5"
            // >
            <Fragment key={index}>
              <SkillIconWithText
                icon={item.icon}
                isMaterialIcon={item.isMaterialIcon}
                text={item.text}
                href={item.href}
                index={index}
              />
            </Fragment>
            // </motion.div>
          ))}
        </div>
      </div>
      {/* <Bubbles showIndices={dots} /> */}
    </ResponsiveContainer>
  );
};
