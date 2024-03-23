import { clsx } from "clsx";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Chip, Icon } from "@mui/material";
import { CodeText } from "../atoms/CodeText";
import Image from "next/image";

// Icons
import { putOffsetTop } from "../store/slices/generalSlice";
import { useRef } from "react";
import { useEffect } from "react";
import { Bubbles } from "./Bubbles";

// framer motion
import { motion } from "framer-motion";

const fadeInAnimationRightVariants = {
  initial: {
    opacity: 0,
    x: 1000,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      delay: 0.05,
      type: "spring",
      stiffness: 50,
    },
  }),
};
const fadeInAnimationLeftVariants = {
  initial: {
    opacity: 0,
    x: -1000,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      delay: 1.5,
      type: "spring",
      stiffness: 50,
    },
  }),
};
const fadeInAnimationLeftTitleVariants = {
  initial: {
    opacity: 0,
    x: -1000,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      delay: 1,
      type: "spring",
      stiffness: 50,
    },
  }),
};

export const AboutSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const dispatch = useDispatch();
  const ownRef = useRef(scrollRef);
  const { isLight } = useSelector((state) => state.theme);

  const dots = useMemo(() => {
    const randomArray = [];
    for (let i = 0; i < 5; i++) {
      randomArray.push(Math.floor(Math.random() * 25) + 1);
    }
    return randomArray;
  }, []);

  const aboutSectionClasses = useMemo(() => {
    return clsx({
      "[&>*]:z-10": true,
      // "h-screen": true,
      // "min-h-[calc(100vh-80px)]": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
      flex: true,
      "flex-wrap": true,
      "lg:justify-between": true,
      "justify-center": true,
      "items-center": true,
      // "gap-x-5" : true,
      ...customClasses,
    });
  }, [customClasses]);
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
      "font-thin": true,
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
      "font-thin": true,
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
        property: "aboutSectionOffsetTop",
        value: ownRef.current.offsetTop,
      }),
    );
  }, [dispatch, ownRef]);

  return (
    <ResponsiveContainer
      scrollRef={ownRef}
      customClasses={{
        "bg-ownBlack-100": true,
        "dark:bg-ownBlack-200": true,
        "py-16": true,
        "box-border": true,
      }}
    >
      <div className={aboutSectionClasses}>
        <div className="w-full h-ful lg:w-4/6 lg:order-first order-last">
          <motion.h2
            variants={fadeInAnimationLeftTitleVariants}
            initial="initial"
            animate="animate"
            viewport={{
              once: true,
            }}
            className={aboutMeTitleClasses}
          >
            About Me
          </motion.h2>
          <motion.div
            className={aboutMeTextClasses}
            variants={fadeInAnimationLeftVariants}
            initial="initial"
            animate="animate"
            viewport={{
              once: true,
            }}
          >
            <CodeText
              codeTag={{
                start: (
                  <Typography
                    // text={"<p>"}
                    text={""}
                    customClasses={{
                      "text-ownBlue-100": true,
                      "dark:text-fuchsia-600": true,
                      "font-semibold": true,
                      "text-base": true,
                    }}
                  />
                ),
                end: (
                  <Typography
                    // text={"</p>"}
                    text={""}
                    customClasses={{
                      "text-ownBlue-100": true,
                      "dark:text-fuchsia-600": true,
                      "font-semibold": true,
                      "text-base": true,
                    }}
                  />
                ),
              }}
            >
              <Typography
                text={
                  "Armed with a distinguished Bachelor's degree from the University of Information Technology (UIT) Yangon and backed by over five years of professional experience, I am a seasoned frontend developer. Proficient in leveraging Material-UI, React, Next.js, Tailwind, and REST API integration, I am committed to crafting cutting-edge web applications that seamlessly blend functionality with exceptional user experience. My track record speaks volumes, setting me apart as a driving force in the dynamic realm of web development."
                }
                customClasses={{
                  "text-ownBlack-200": true,
                  "dark:text-white": true,
                  "text-md": true,
                  "leading-7": true,
                  "text-justify": true,
                }}
                customStyles={{
                  fontFamily: '"Varela Round", sans-serif',
                }}
              />
            </CodeText>
            {/* <CodeText
              customClasses={{
                "mt-5": true,
                flex: true,
                "gap-x-2": true,
              }}
              codeTag={{
                start: (
                  <Typography
                    text={"<span>"}
                    customClasses={{
                      "text-ownBlue-200": true,
                      "dark:text-violet-300": true,
                      "font-semibold": true,
                      // "text-2xl": true,
                    }}
                  />
                ),
                end: (
                  <Typography
                    text={"</span>"}
                    customClasses={{
                      "text-ownBlue-200": true,
                      "dark:text-violet-300": true,
                      "font-semibold": true,
                      // "text-2xl": true,
                    }}
                  />
                ),
              }}
            >
              {[
                {
                  Icon: ({ classes }) => <FacebookIcon className={classes} />,
                  link: "https://www.facebook.com/aikenyan.lynnoo.1",
                },
                {
                  Icon: ({ classes }) => <LinkedInIcon className={classes} />,
                  link: "https://www.linkedin.com/in/aikeoo/",
                },
                {
                  Icon: ({ classes }) => <GitHubIcon className={classes} />,
                  link: "https://github.com/AikeNyanLynnOo",
                },
              ].map(({ Icon, link }, index) => (
                <Link href={link} key={index}>
                  <Icon classes="text-ownBlack-200 dark:text-ownMint-200 text-2xl hover:text-ownMint-200 hover:dark:text-violet-300 hover:shadow-xl" />
                </Link>
              ))}
            </CodeText> */}
          </motion.div>
        </div>
        <Image
          src="/images/dev.png"
          alt="dev_img"
          height={1000}
          width={1000}
          className="h-48 w-48 lg:h-64 lg:w-64 rounded-full p-0 mb-10 lg:my-0 ring-1 ring-ownMint-200"
        />
      </div>
      <Bubbles showIndices={dots} />
    </ResponsiveContainer>
  );
};
