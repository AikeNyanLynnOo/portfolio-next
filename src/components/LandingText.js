import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CodeText } from "../atoms/CodeText";
import { Typography } from "../atoms/Typography";
import { Button, Chip, Icon } from "@mui/material";
import { Fragment } from "react";
import Link from "next/link";

export const LandingText = ({ children, customClasses, customStyles }) => {
  const { isLight } = useSelector((state) => state.theme);
  const landingTextClasses = useMemo(() => {
    return clsx({
      "z-10": true,
      "h-3/4": true,
      "lg:w-4/6": true,
      "xl:w-5/12": true,
      "w-full": true,
      ...customClasses,
    });
  }, [customClasses]);

  const handleClickDownload = async () => {
    const response = await fetch("/api/file");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "AikeNyanLynnOo_Frontend.pdf";
    link.click();
  };

  return (
    <div
      className={landingTextClasses}
      style={
        {
          // background: "blue",
        }
      }
    >
      <CodeText
        customClasses={{
          "mb-4": true,
        }}
        codeTag={{
          start: (
            <Typography
              // text={"<h1>"}
              text={""}
              customClasses={{
                "text-purple-600": true,
                "dark:text-pink-400": true,
                "font-semibold": true,
                "text-base": true,
              }}
            />
          ),
          end: (
            <Typography
              // text={"</h1>"}
              text={""}
              customClasses={{
                "text-purple-600": true,
                "dark:text-pink-400": true,
                "font-semibold": true,
                "text-base": true,
              }}
            />
          ),
        }}
      >
        <Typography
          text={"Hey"}
          customClasses={{
            "text-ownBlack-200": true,
            "dark:text-white": true,
            "text-3xl": true,
          }}
          customStyles={{
            fontFamily: '"Source Code Pro", monospace',
          }}
        />
        <Typography
          text={"I'm "}
          customClasses={{
            "text-ownBlack-200": true,
            "dark:text-white": true,
            "text-3xl": true,
          }}
          customStyles={{
            fontFamily: '"Source Code Pro", monospace',
          }}
        >
          <span
            className="text-fuchsia-700 dark:text-ownMint-200 text-3xl"
            style={{
              // fontFamily: '"Source Code Pro", monospace',
              fontFamily: '"Varela Round", sans-serif',
            }}
          >
            {"Aike"}
          </span>
        </Typography>
        <Typography
          text={"Frontend Developer "}
          customClasses={{
            "text-ownBlack-200": true,
            "dark:text-white": true,
            "text-3xl": true,
            flex: true,
            "items-center": true,
          }}
          customStyles={{
            fontFamily: '"Source Code Pro", monospace',
          }}
        >
          <span
            className="dark:text-ownMint-100 bg-ownMint-100 text-ownBlack-200 dark:bg-ownBlack-200 rounded-full w-fit xl:hidden sm:inline-flex hidden text-sm px-4 py-3 ml-2"
            style={{
              fontFamily: '"Varela Round", sans-serif',
            }}
          >
            5 years of dev exp
          </span>
        </Typography>
      </CodeText>
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
            "Ready to help with your business, specializing in the creation of robust and dynamic React and Next.js applications."
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
      <div className="pt-12">
        <button
          onClick={handleClickDownload}
          className="bg-white hidden sm:inline-flex dark:bg-ownBlack-200 capitalize dark:text-ownMint-200 border border-ownBlack-100 dark:border-ownMint-200 rounded-full text-ownBlack-100 text-base font-semibold hover:border-ownMint-100 hover:bg-ownMint-100 hover:text-ownBlack-100 px-4 py-1 mr-3 mt-2"
          style={{
            fontFamily: '"Varela Round", sans-serif',
          }}
        >
          Download CV
          <Icon className="text-xl ml-2">vertical_align_bottom</Icon>
        </button>
        <button
          onClick={handleClickDownload}
          className="bg-white inline-flex sm:hidden dark:bg-ownBlack-200 capitalize dark:text-ownMint-200 border border-ownBlack-100 dark:border-ownMint-200 rounded-full text-ownBlack-100 text-base font-semibold hover:border-ownMint-100 hover:bg-ownMint-100 hover:text-ownBlack-100 px-4 py-1 mr-3 mt-2"
          style={{
            fontFamily: '"Varela Round", sans-serif',
          }}
        >
          CV
          <Icon className="text-xl ml-2">vertical_align_bottom</Icon>
        </button>
        <a
          href="mailto:aikenyanlynnooo.dev@gmail.com"
          className="bg-white dark:bg-ownBlack-200 capitalize dark:text-ownMint-200 rounded-full text-purple-700 text-base font-semibold hover:bg-ownMint-100 hover:text-ownBlack-100 px-4 sm:px-5 py-1 mt-2 inline-flex items-center"
          style={{
            fontFamily: '"Varela Round", sans-serif',
          }}
        >
          Let&apos; talk
          <Icon className="text-xl ml-2">forward_to_inbox</Icon>
        </a>
      </div>
    </div>
  );
};
