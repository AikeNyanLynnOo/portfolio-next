import { clsx } from "clsx";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Stack } from "@mui/material";
import { NavIcon } from "../atoms/NavIcon";
import { changeActiveNav, changeScrolling } from "../store/slices/generalSlice";

export const FloatingNav = ({ children, customClasses, customStyles }) => {
  const {
    activeNav,
    landingSectionOffsetTop,
    aboutSectionOffsetTop,
    skillSectionOffsetTop,
    projectsSectionOffsetTop,
    blogsSectionOffsetTop,
    contactSectionOffsetTop,
  } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);
  const floatingNavClasses = useMemo(() => {
    return clsx({
      // "w-10": true,
      "p-0.5": true,
      "rounded-full": true,
      "bg-white": true,
      "dark:bg-ownBlack-100": true,
      border: true,
      "border-ownBlack-200": true,
      "dark:border-white": true,
      fixed: true,
      "left-0.5": true,
      "lg:left-3": true,
      "top-1/2": true,
      "-translate-y-1/2": true,
      ...customClasses,
    });
  }, [customClasses]);

  const handleClick = (index) => {
    dispatch(changeScrolling({ isScrolling: false }));
    switch (index) {
      case 0:
        window.scrollTo({
          top: landingSectionOffsetTop - 80,
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
    <div className="hidden md:flex">
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
        className={floatingNavClasses}
        sx={{
          ...customStyles,
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            // top: "5",
            // top: "18%",
            // top: "34.5%",
            // top: "51.5%",
            // top: "68.5%",
            // bottom : 2,
            top: topPercents[activeNav],
            height: "14%",
            width: "90%",
            borderRadius: "50%",
            zIndex: -1,
            backgroundColor: isLight ? "#1A1E23" : "#FFFFFF",
            // backgroundColor: "red",
            transition: "top 0.1s linear",
          },
        }}
      >
        {/* {activeLink} */}
        {[
          {
            icon: "home_max",
          },
          {
            icon: "perm_identity",
          },
          {
            icon: "code",
          },
          {
            icon: "dvr",
          },
          {
            icon: "edit_note",
          },
          {
            icon: "mail_outline",
          },
        ].map((item, key) => (
          <NavIcon
            key={key}
            isActive={key === activeNav ? true : false}
            index={key}
            icon={item && item.icon}
            handleClick={handleClick}
          />
        ))}
      </Stack>
    </div>
  );
};
