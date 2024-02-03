import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const DrawerNavItem = ({
  index,
  isActive,
  children,
  item,
  handleClick,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const drawerNavItemClasses = useMemo(() => {
    return clsx({
      "w-full": true,
      "h-fit": true,
      "px-5": true,
      "py-6": true,
      flex: true,
      "cursor-pointer": true,
      "select-none": true,
      "text-ownBlack-100": !isActive,
      "text-ownMint-400": isActive,
      "dark:text-white": !isActive,
      "dark:text-ownMint-200": isActive,
      "lg:text-xl": true,
      "text-base": true,
      ...customClasses,
    });
  }, [customClasses, isActive]);

  const navItemIconClasses = useMemo(() => {
    return clsx({
      "w-10": true,
      "text-ownBlack-100": !isActive,
      "text-ownMint-400": isActive,
      "dark:text-white": !isActive,
      "dark:text-ownMint-200": isActive,
      "lg:text-xl": true,
      "text-base": true,
    });
  }, [isActive]);

  return (
    <div
      className={drawerNavItemClasses}
      onClick={() => {
        handleClick(index);
      }}
    >
      <span className={navItemIconClasses}>
        <Icon>{item.icon}</Icon>
      </span>
      <span>{item.text}</span>
    </div>
  );
};
