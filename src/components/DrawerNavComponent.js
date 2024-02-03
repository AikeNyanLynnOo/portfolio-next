import { clsx } from "clsx";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Stack } from "@mui/material";
import { NavIcon } from "../atoms/NavIcon";
import {
  changeActiveNav,
  changeDrawerState,
} from "../store/slices/generalSlice";
import { DrawerNavItem } from "../atoms/DrawerNavItem";

export const DrawerNav = ({ children, customClasses, customStyles }) => {
  const { activeNav } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);
  const { isDrawerOpen } = useSelector((state) => state.general);
  const drawerNavClasses = useMemo(() => {
    return clsx({
      "w-full": true,
      "h-full": true,
      "z-10": true,
      "bg-white": true,
      "dark:bg-ownBlack-100": true,
      "bg-opacity-100": true,
      // "dark:bg-opacity-90": true,
      fixed: true,
      "top-20": true,
      "left-0": true,
      "transition-all": true,
      "duration-300": true,
      "translate-x-full": true,
      transform: true,
      "-translate-x-0": isDrawerOpen,
      "translate-x-full": !isDrawerOpen,
      "md:hidden": true,
      block: true,
      ...customClasses,
    });
  }, [customClasses, isDrawerOpen]);

  const handleClick = (index) => {
    // console.log("Index is>>", index);
    // setActiveLink(index);
    dispatch(changeActiveNav(index));
    dispatch(changeDrawerState());
  };
  const topPercents = ["0.9%", "18%", "34.5%", "51.5%", "68.5%", "85%"];

  return (
    <div className={drawerNavClasses}>
      {/* {activeLink} */}
      {[
        {
          icon: "home_max",
          text: "Home",
        },
        {
          icon: "perm_identity",
          text: "About Me",
        },
        {
          icon: "code",
          text: "Skills",
        },
        {
          icon: "dvr",
          text: "Projects & Experience",
        },
        {
          icon: "edit_note",
          text: "Blogs",
        },
        {
          icon: "mail_outline",
          text: "Contact Me",
        },
      ].map((item, key) => (
        <DrawerNavItem
          key={key}
          isActive={key === activeNav ? true : false}
          index={key}
          item={item}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
