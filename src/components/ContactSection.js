import { clsx } from "clsx";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { useRef } from "react";
import { useEffect } from "react";
import { putOffsetTop } from "../store/slices/generalSlice";
import { TextIcon } from "../atoms/TextIcon";
import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LeetCodeIcon } from "../atoms/LeetCodeIcon";
import { darkTheme } from "../Theme/styles";

export const ContactSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const dispatch = useDispatch();
  const ownRef = useRef(scrollRef || null);
  const { isLight } = useSelector((state) => state.theme);
  const contactSectionClasses = useMemo(() => {
    return clsx({
      // "h-screen": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
      flex: true,
      "justify-between": true,
      "items-center": true,
      ...customClasses,
    });
  }, [customClasses]);

  useEffect(() => {
    dispatch(
      putOffsetTop({
        property: "contactSectionOffsetTop",
        value: ownRef.current.offsetTop,
      }),
    );
  }, [dispatch]);

  return (
    <ResponsiveContainer
      customClasses={{
        "bg-ownBlack-100": true,
        "dark:bg-ownBlack-200": true,
        "py-3": true,
        "box-border": true,
      }}
      scrollRef={ownRef}
    >
      <div className={contactSectionClasses}>
        <TextIcon
          text={`</>`}
          customClasses={{
            "text-ownMint-200": true,
            "text-md": true,
            "md:text-xl": true,
            "sm:block": true,
            hidden: true,
          }}
        >
          <span className="text-ownBlack-100 ml-3 text-md dark:text-white md:text-xl">
            Aike
          </span>
        </TextIcon>
        <Typography
          customStyles={{
            fontFamily: '"Varela Round", sans-serif',
          }}
          customClasses={{
            "text-sm": true,
            "font-thin": true,
          }}
        >
          Implemented by Aike @2024
        </Typography>
        <div className="flex items-center">
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
              Icon: ({ classes }) => (
                <LeetCodeIcon
                  customStyles={{
                    unHoverDarkColor: darkTheme.textColor[200],
                    hoverDarkColor: darkTheme.textColor[600],
                  }}
                />
              ),
              link: "https://leetcode.com/a1k3/",
            },
            {
              Icon: ({ classes }) => <TelegramIcon className={classes} />,
              link: "https://t.me/a1k333",
            },
          ].map(({ Icon, link }, index) => (
            <Link href={link} key={index}>
              <Icon classes="text-ownBlack-200 dark:text-ownMint-200 text-2xl hover:text-ownMint-200 hover:dark:text-violet-300 hover:shadow-xl mx-1" />
            </Link>
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
};
