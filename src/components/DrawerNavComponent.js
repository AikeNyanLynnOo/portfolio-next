import { clsx } from "clsx";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Stack } from "@mui/material";
import { NavIcon } from "../atoms/NavIcon";
import {
  changeActiveNav,
  changeDrawerState,
  changeScrolling,
} from "../store/slices/generalSlice";
import { DrawerNavItem } from "../atoms/DrawerNavItem";

export const DrawerNav = ({ children, customClasses, customStyles }) => {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);
  const {
    activeNav,
    isDrawerOpen,
    landingSectionOffsetTop,
    aboutSectionOffsetTop,
    skillSectionOffsetTop,
    projectsSectionOffsetTop,
    blogsSectionOffsetTop,
    contactSectionOffsetTop,
  } = useSelector((state) => state.general);
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

    // navigating
    dispatch(changeScrolling({ isScrolling: false }));
    switch (index) {
      case 0:
        window.scrollTo({
          top: landingSectionOffsetTop-80,
          behavior: "smooth",
        });
        break;
      case 1:
        window.scrollTo({
          top: aboutSectionOffsetTop - 80,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scrollTo({
          top: skillSectionOffsetTop - 80,
          behavior: "smooth",
        });
        break;
      case 3:
        window.scrollTo({
          top: projectsSectionOffsetTop - 80,
          behavior: "smooth",
        });
        break;
      case 4:
        window.scrollTo({
          top: blogsSectionOffsetTop - 80,
          behavior: "smooth",
        });
        break;
      case 5:
        window.scrollTo({
          top: contactSectionOffsetTop - 80,
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
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
