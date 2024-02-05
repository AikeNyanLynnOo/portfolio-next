import { clsx } from "clsx";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Chip } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";
import { putOffsetTop } from "../store/slices/generalSlice";

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
      "h-screen": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
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
        "py-16": true,
      }}
      scrollRef={ownRef}
    >
      <div className={contactSectionClasses}>Contact Section</div>
    </ResponsiveContainer>
  );
};
