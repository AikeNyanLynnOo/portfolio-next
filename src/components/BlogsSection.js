import { clsx } from "clsx";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Chip } from "@mui/material";
import { useEffect } from "react";
import { putOffsetTop } from "../store/slices/generalSlice";
import { useRef } from "react";

export const BlogsSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const dispatch = useDispatch();
  const ownRef = useRef(scrollRef || null);

  const { isLight } = useSelector((state) => state.theme);
  const blogsSectionClasses = useMemo(() => {
    return clsx({
      // "h-screen": true,
      "h-[calc(100vh-80px)]": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
      ...customClasses,
    });
  }, [customClasses]);

  useEffect(() => {
    dispatch(
      putOffsetTop({
        property: "blogsSectionOffsetTop",
        value: ownRef.current.offsetTop,
      }),
    );
  }, [dispatch]);

  return (
    <ResponsiveContainer
      customClasses={{
        "bg-ownBlack-200": true,
        "dark:bg-ownBlack-100": true,
        "py-16": true,
        "box-border": true,
      }}
      scrollRef={ownRef}
    >
      <div className={blogsSectionClasses}>Blogs Section</div>
    </ResponsiveContainer>
  );
};
