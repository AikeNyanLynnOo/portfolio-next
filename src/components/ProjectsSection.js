import { clsx } from "clsx";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Box, Chip } from "@mui/material";
import { CommonTab } from "../molecules/CommonTab";
import { useState } from "react";
import { useCallback } from "react";
import { orange } from "tailwindcss/colors";
import { darkTheme, lightTheme } from "../Theme/styles";
import { ProjectGridSlider } from "../molecules/ProjectGridSlider";
import ProjectGrid from "../molecules/ProjectGrid";
import { useEffect } from "react";
import { putOffsetTop } from "../store/slices/generalSlice";
import { useRef } from "react";

export const ProjectsSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const dispatch = useDispatch();
  const ownRef = useRef(scrollRef || null);
  const { isLight } = useSelector((state) => state.theme);

  const slides = useMemo(() => {}, []);

  const projectsSectionClasses = useMemo(() => {
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

  const projectTitleClasses = useMemo(() => {
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

  // const skillsIconContainerClasses = useMemo(() => {
  //   return clsx({
  //     "lg:w-4/6": true,
  //     "md:w-5/6": true,
  //     "w-full": true,
  //     "mx-auto": true,
  //     "py-4": true,
  //     flex: true,
  //     "flex-wrap": true,
  //     "justify-center": true,
  //   });
  // }, []);

  const [active, setActive] = useState(0);

  const handleChange = useCallback((event, newValue) => {
    setActive(newValue);
  }, []);
  const tabItems = [
    {
      id: 1,
      title: "Projects",
      renderTablItem: () => (
        <ProjectGridSlider
          customStyles={{
            // flex: "75%",
            height: "100%",
          }}
          items={slides.map((slide, index) => ({
            renderItem: () => (
              // rendering items
              <ProjectGrid projects={slide && slide.projects} />
            ),
          }))}
        />
      ),
    },
    {
      id: 2,
      title: "Experience",
    },
  ];

  useEffect(() => {
    dispatch(
      putOffsetTop({
        property: "projectsSectionOffsetTop",
        value: ownRef.current.offsetTop,
      }),
    );
  }, [dispatch]);

  return (
    <ResponsiveContainer
      customClasses={{
        "bg-ownBlack-100": true,
        "dark:bg-ownBlack-200": true,
        "py-16": true,
      }}
      scrollRef={ownRef}
    >
      <div className={projectsSectionClasses}>
        <h2 className={projectTitleClasses}>Projects & Experience</h2>
        {/* <p
          className="py-10 dark:text-ownMint-200 text-ownBlack-200 text-3xl text-center"
          style={{
            fontFamily: '"Varela Round", sans-serif',
          }}
        > */}
        <CommonTab
          active={active}
          handleChange={handleChange}
          tabItems={tabItems}
          customStyles={{
            // border: "1px solid red",
            py: 1,
            borderRadius: "10px",
            // border : "1px solid black",
            // boxShadow: "0px 6px 34px 0px rgba(108, 108, 108, 0.25)",
            // boxShadow: "0px 2px 6px 0px rgba(22, 50, 79, 0.20)",
          }}
          renderCustomLabel={(tabItem, index) => (
            <Box
              sx={{
                textAlign: "center",
                borderRight:
                  index === tabItems.length - 1
                    ? "none"
                    : `1px solid ${isLight ? lightTheme.textColor[100] : darkTheme.textColor[100]}`,
                width: "100%",
                px: 5,
                my: 4,
              }}
            >
              <Typography
                text={tabItem.title}
                customClasses={{
                  "mb-2": true,
                }}
                customStyles={{
                  fontFamily: "'Source Code Pro', monospace",
                }}
              />
            </Box>
          )}
          customTabStyles={{
            "& .MuiTab-root": {
              p: 0,
            },
            "& .MuiTabs-indicator": {
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
              height: "3px",
            },
            "& .MuiTabs-indicatorSpan": {
              maxWidth: 40,
              width: "100%",
              backgroundColor: isLight
                ? lightTheme.backgroundColor[400]
                : darkTheme.textColor[200],
            },
          }}
        />
        {/* </p> */}
        <div></div>
      </div>
    </ResponsiveContainer>
  );
};
