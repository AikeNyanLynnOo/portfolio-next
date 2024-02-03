import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Chip } from "@mui/material";

export const LandingSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const landingSectionClasses = useMemo(() => {
    return clsx({
      "h-screen": true,
      "py-16": true,
      //   "bg-white": true,
      //   "dark:bg-ownBlack-200": true,
      //   flex: true,
      //   "justify-between": true,
      //   "items-center": true,
      ...customClasses,
    });
  }, [customClasses]);

  return (
    <ResponsiveContainer>
      <div className={landingSectionClasses} ref={scrollRef}>
        <Typography
          text={"Welcome!"}
          customClasses={{
            "text-3xl": true,
            // "md:text-3xl": true,
            "lg:text-4xl": true,
            "xl:text-5xl": true,
            "text-left": true,
            "w-full": true,
            "h-fit": true,
            "sm:text-center": true,
            "mb-5": true,
          }}
        />
        <div className="block items-center justify-between h-5/6 lg:flex">
          <FloatingLandingPanel />
          <LandingText />
          <Chip
            // variant="outlined"
            className=" dark:text-ownMint-100 bg-ownMint-100 text-ownBlack-200 dark:bg-ownBlack-200 py-11 rounded-xxl w-fit hidden xl:flex"
            label={
              <div className="flex items-center content-center">
                <Typography
                  text={"4+"}
                  customClasses={{
                    "text-ownBlack-200": true,
                    "w-1/2": true,
                    "dark:text-ownMint-100": true,
                    "text-4xl": true,
                  }}
                  customStyles={{
                    fontFamily: '"Varela Round", sans-serif',
                  }}
                />
                <Typography
                  text={"Years of Dev Exp"}
                  customClasses={{
                    "text-ownBlack-100": true,
                    "dark:text-white": true,
                    "text-wrap": true,
                    // "text-right": true,
                    "w-fit": true,
                    "text-sm": true,
                  }}
                  customStyles={{
                    fontFamily: '"Varela Round", sans-serif',
                  }}
                />
              </div>
            }
          />
        </div>
      </div>
    </ResponsiveContainer>
  );
};
