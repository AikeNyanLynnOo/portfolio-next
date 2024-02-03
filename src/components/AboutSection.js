import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Chip, Icon } from "@mui/material";
import { CodeText } from "../atoms/CodeText";
import Image from "next/image";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export const AboutSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const aboutSectionClasses = useMemo(() => {
    return clsx({
      "h-screen": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
      flex: true,
      "flex-wrap": true,
      "lg:justify-between": true,
      "justify-center": true,
      "items-center": true,
      // block: true,
      ...customClasses,
    });
  }, [customClasses]);
  const aboutMeTitleClasses = useMemo(() => {
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
      "dark:bg-ownBlack-100": true,
      border: true,
      "border-gray-60": true,
    });
  }, []);

  return (
    <ResponsiveContainer
      scrollRef={scrollRef}
      customClasses={{
        "bg-ownBlack-100": true,
        "dark:bg-ownBlack-200": true,
        "py-16": true,
      }}
    >
      <div className={aboutSectionClasses}>
        <div className="w-full lg:w-4/6 lg:order-first order-last">
          <p className={aboutMeTitleClasses}>About Me</p>
          <div className={aboutMeTextClasses}>
            <CodeText
              codeTag={{
                start: (
                  <Typography
                    text={"<p>"}
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
                    text={"</p>"}
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
                  "With a wealth of professional experience, I am a seasoned frontend developer specializing in the adept utilization of Material-UI, React, Next.js, Tailwind, and REST API integration to meticulously design and develop cutting-edge web applications that prioritize both functionality and user experience."
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
            <CodeText
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
                  link: "/",
                },
                {
                  Icon: ({ classes }) => <LinkedInIcon className={classes} />,
                  link: "/",
                },
                {
                  Icon: ({ classes }) => <GitHubIcon className={classes} />,
                  link: "/",
                },
              ].map(({ Icon, link }, index) => (
                <Link href={link} key={index}>
                  <Icon classes="text-ownBlack-200 dark:text-ownMint-200 text-2xl hover:text-ownMint-200 hover:dark:text-violet-300 hover:shadow-xl" />
                </Link>
              ))}
            </CodeText>
          </div>
        </div>
        <Image
          src="/images/dev.png"
          alt="dev_img"
          height={1000}
          width={1000}
          className="h-64 w-64 rounded-full"
        />
      </div>
    </ResponsiveContainer>
  );
};
