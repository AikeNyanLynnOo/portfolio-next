import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";

export const LandingSection = ({ children, customClasses, customStyles }) => {
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
      <div className={landingSectionClasses}>
        <Typography
          text={"Welcome!"}
          customClasses={{
            "text-2xl": true,
            "md:text-3xl": true,
            "lg:text-4xl": true,
            "xl:text-5xl": true,
            "text-left": true,
            "w-full": true,
            "h-fit": true,
            "sm:text-center": true,
          }}
        />
        <div className="flex items-center justify-between h-5/6">
          <FloatingLandingPanel />
          <LandingText />
        </div>
      </div>
    </ResponsiveContainer>
  );
};
