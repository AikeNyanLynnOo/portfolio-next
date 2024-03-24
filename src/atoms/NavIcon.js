import { Icon } from "@mui/material";
import { clsx } from "clsx";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const NavIcon = ({
  index,
  isActive,
  children,
  icon,
  handleClick,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  // console.log("IS light>>", isLight);
  const textIconClasses = useMemo(() => {
    return clsx({
      "p-1": true,
      "cursor-pointer": true,
      "select-none": true,
      "text-ownMint-200": !isLight,
      "rounded-full": true,
      // "bg-ownBlack-100": isActive,
      "text-white": isActive,
      "dark:text-ownBlack-200": isActive,
      // "dark:bg-white": isActive,
      "lg:text-xl": true,
      "text-base": true,
      // "transition-all" : true,
      // "ease" : true,
      // "duration-700" : true,
      // "delay-150" : true,
      relative: true,
      ...customClasses,
    });
  }, [isLight, customClasses, isActive]);

  return (
    <Icon
      className={textIconClasses}
      onClick={() => {
        handleClick(index);
      }}
      sx={{
        width: "fit-content",
        height: "fit-content",
      }}
      // style={{
      //   "&::before": {
      //     content: "a",
      //     display: "block",
      //     height: "100%",
      //     width: "100%",
      //     backgroundColor: "red",
      //     border : '1px solid red'
      //   },
      //   ...customStyles,
      // }}
    >
      {icon}
    </Icon>
  );
};
