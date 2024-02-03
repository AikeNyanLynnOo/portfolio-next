import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Chip } from "@mui/material";

export const ProjectsSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const projectsSectionClasses = useMemo(() => {
    return clsx({
      "h-screen": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
      ...customClasses,
    });
  }, [customClasses]);

  return (
    <ResponsiveContainer
      customClasses={{
        "bg-ownBlack-100": true,
        "dark:bg-ownBlack-200": true,
        "py-16": true,
      }}
      scrollRef={scrollRef}
    >
      <div className={projectsSectionClasses}>Projects Section</div>
    </ResponsiveContainer>
  );
};
