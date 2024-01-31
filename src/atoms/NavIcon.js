import { Icon } from "@mui/material";
import { clsx } from "clsx";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const NavIcon = ({
  children,
  icon,
  handleClick,
  isActive,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const textIconClasses = useMemo(() => {
    return clsx({
      "cursor-pointer": true,
      "select-none": true,
      "text-ownMint-200": !isLight,
      ...customClasses,
    });
  }, [isLight, customClasses]);

  return (
    <Icon
      className={textIconClasses}
      onClick={handleClick}
      style={{
        ...customStyles,
      }}
    >
      {icon}
    </Icon>
  );
};
