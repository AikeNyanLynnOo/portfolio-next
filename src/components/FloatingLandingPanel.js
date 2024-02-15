import { clsx } from "clsx";
import { Fragment, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Typography } from "../atoms/Typography";
import { darkTheme, getFlPanelIconStyles, lightTheme } from "../Theme/styles";
import Image from "next/image";
import { TextWithIcon } from "../molecules/TextWithIcon";
import { Chip, Icon } from "@mui/material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { LaptopMac, Link, Place } from "@mui/icons-material";

export const FloatingLandingPanel = ({
  children,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const floatingPanelClasses = useMemo(() => {
    return clsx({
      "h-96": true,
      flex: true,
      "flex-col": true,
      "justify-between": true,
      "rounded-tl-[30%]": true,
      "rounded-br-[30%]": true,
      "border-r": true,
      "border-b": true,
      "border-ownBlack-100": true,
      "dark:border-white": true,
      "min-w-60": true,
      "py-6": true,
      "px-3": true,
      hidden: true,
      "lg:block": true,
      relative: true,
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
    <div
      className={floatingPanelClasses}
      // className={
      //   "bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 border border-gray-100"
      // }
      style={{
        boxShadow: `-5px -5px ${isLight ? lightTheme.borderColor[100] : darkTheme.borderColor[100]}`,
        // animation: "float 10s ease-in-out infinite",
      }}
    >
      {/* <Image
        src={"/images/icons/pin2.png"}
        height={1000}
        width={1000}
        className="absolute -right-5 -top-10 h-14 w-14"
        alt="pin-icon"
      /> */}
      <Image
        src={"/images/anlo.jpg"}
        height={1000}
        width={1000}
        className="outline-ownMint-200 dark:outline-ownMint-100 mx-auto mb-4 h-16 w-16 rounded-full outline outline-2 outline-offset-2"
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
      <div className="my-5">
        {[
          {
            text: "aikenyanlynnooo.dev@gmail.com",
            href: `mailto:aikenyanlynnooo.dev@gmail.com`,
            Icon: <AttachEmailIcon sx={{ ...iconStyles }} />,
          },
          {
            text: "Yangon, Myanmar",
            Icon: <Place sx={{ ...iconStyles }} />,
          },
          {
            text: "Full-time | Freelance",
            Icon: <LaptopMac sx={{ ...iconStyles }} />,
          },
          {
            text: "https://aikenyanlynnoo.github.io/",
            href: `https://aikenyanlynnoo.github.io/`,
            Icon: <Link sx={{ ...iconStyles, transform: "rotate(135deg)" }} />,
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
      <div className="my-5">
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
      </div>
    </div>
  );
};
