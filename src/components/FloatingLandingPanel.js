import Link from "next/link";
import { clsx } from "clsx";
import { Fragment, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Typography } from "../atoms/Typography";
import { darkTheme, getFlPanelIconStyles, lightTheme } from "../Theme/styles";
import Image from "next/image";
import { TextWithIcon } from "../molecules/TextWithIcon";
import { Icon } from "@mui/material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { LaptopMac, Place } from "@mui/icons-material";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { LeetCodeIcon } from "../atoms/LeetCodeIcon";

// framer motion
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -1000,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      delay: 0.05,
      type: "spring",
      stiffness: 20,
    },
  }),
};

export const FloatingLandingPanel = ({
  children,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const floatingPanelClasses = useMemo(() => {
    return clsx({
      "h-auto": true,
      flex: true,
      "flex-col": true,
      "justify-between": true,
      // "rounded-tl-xl": true,
      // "rounded-br-xl": true,
      "rounded-xl": true,
      "my-10": true,
      "lg:my-0": true,
      // "lg:rounded-tl-[30%]": true,
      // "lg:rounded-br-[30%]": true,
      "bg-white": true,
      "dark:bg-ownBlack-200": true,
      // "border-r": true,
      // "border-b": true,
      // "border-ownBlack-100": true,
      // "dark:border-white": true,
      "min-w-60": true,
      "py-10": true,
      "px-7": true,
      // hidden: true,
      "lg:block": true,
      // relative: true,
      "backdrop-blur-sm": true,
      "bg-white/20": true,
      "dark:bg-ownBlack-200/20": true,
      "shadow-xl": true,
      ...customClasses,
    });
  }, [customClasses]);

  const globeIcon = useMemo(() => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
  }, []);

  const iconStyles = useMemo(() => {
    return getFlPanelIconStyles(isLight);
  }, [isLight]);

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      viewport={{
        once: true,
      }}
      className={floatingPanelClasses}
      // className={
      //   "bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 border border-gray-100"
      // }
      style={
        {
          // boxShadow: `-5px -5px ${isLight ? lightTheme.borderColor[100] : darkTheme.borderColor[100]}`,
          // animation: "float 10s ease-in-out infinite",
        }
      }
    >
      {/* <Image
        src={"/images/icons/pin2.png"}
        height={1000}
        width={1000}
        className="absolute -right-5 -top-10 h-14 w-14"
        alt="pin-icon"
      /> */}
      <Image
        src={"/images/dev.jpg"}
        height={150}
        width={150}
        className="outline-ownMint-200 dark:outline-ownMint-100 mx-auto mb-4 h-20 w-20 rounded-full outline outline-2 outline-offset-2"
        alt="floating-img"
      />
      <Typography
        text={"Aike"}
        customClasses={{
          "text-ownBlack-200": true,
          "dark:text-white": true,
          "text-2xl": true,
          "text-center": true,
        }}
        customStyles={{
          fontFamily: '"Varela Round", sans-serif',
        }}
      />
      <Typography
        text={"Frontend Developer"}
        customClasses={{
          "text-ownBlack-200": true,
          "dark:text-white": true,
          "text-sm": true,
          "text-center": true,
        }}
        customStyles={{
          fontFamily: '"Varela Round", sans-serif',
        }}
      />
      <div className="my-5  w-fit mx-auto">
        {[
          {
            text: "aikenyanlynnoo.dev@gmail.com",
            href: `mailto:aikenyanlynnoo.dev@gmail.com`,
            Icon: <AttachEmailIcon sx={{ ...iconStyles }} />,
          },
          // {
          //   text: "Yangon, Myanmar",
          //   Icon: <Place sx={{ ...iconStyles }} />,
          // },
          {
            text: "Full-time | Freelance",
            Icon: <LaptopMac sx={{ ...iconStyles }} />,
          },
          {
            text: "https://portfolio-aike.vercel.app/",
            href: `https://portfolio-aike.vercel.app/`,
            Icon: (
              <Icon
                style={{
                  fontSize: "16px",
                  marginRight: "8px",
                  transform: "rotate(135deg)",
                  color: isLight
                    ? lightTheme.textColor[100]
                    : darkTheme.textColor[100],
                }}
              >
                link
              </Icon>
            ),
          },
        ].map((info, index) => (
          <Fragment key={index}>
            <TextWithIcon href={info.href}>
              {info.Icon}
              <Typography
                text={info.text}
                customClasses={{
                  "text-ownBlack-200": true,
                  "dark:text-white": true,
                  "text-sm": true,
                  "text-center": true,
                }}
                customStyles={{
                  fontFamily: '"Varela Round", sans-serif',
                }}
              />
            </TextWithIcon>
          </Fragment>
        ))}
      </div>
      {/* <div className="my-5">
        {[
          {
            label: "React",
          },
          {
            label: "NextJS",
          },
          {
            label: "VueJs",
          },
        ].map((chip, index) => (
          <Chip
            key={index}
            label={chip.label}
            size="small"
            sx={{
              backgroundColor: isLight
                ? lightTheme.backgroundColor[200]
                : darkTheme.textColor[100],
              color: lightTheme.textColor[100],
              mr: 1,
              textTransform: "uppercase",
              fontFamily: '"Varela Round", sans-serif',
            }}
          />
        ))}
      </div> */}
      <div className="flex items-center gap-x-2 mx-auto">
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
          {
            Icon: ({ classes }) => <LeetCodeIcon />,
            link: "https://leetcode.com/a1k3/",
          },
          {
            Icon: ({ classes }) => <TelegramIcon className={classes} />,
            link: "https://t.me/a1k333",
          },
        ].map(({ Icon, link }, index) => (
          <Link href={link || "#"} key={index} target="_blank">
            <Icon classes="text-ownBlack-200 dark:text-white text-2xl hover:text-ownMint-200 hover:dark:text-ownMint-100 hover:shadow-xl" />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
