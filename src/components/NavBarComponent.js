import { useDispatch, useSelector } from "react-redux";
import { switchThemeRequest } from "../store/slices/themeSlice";
import { useCallback, useEffect, useMemo } from "react";
import { clsx } from "clsx";
import { SwitchBtn } from "./SwitchBtn";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { TextIcon } from "../atoms/TextIcon";
import { NavItem } from "./NavItemComponent";
import { Icon } from "@mui/material";
import { changeDrawerState } from "../store/slices/generalSlice";
import { DevIcon } from "../atoms/DevIcon";
import Link from "next/link";
import { Fragment } from "react";
import { CustomLogo } from "../atoms/CustomLogo";
import Example from "./ToggleThemeButton";

export const NavBar = ({ children, customMenuIconClasses }) => {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);
  const { isDrawerOpen } = useSelector((state) => state.general);

  useEffect(() => {
    if (!isLight) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isLight]);
  const handleSwitch = () => {
    dispatch(
      switchThemeRequest({
        theme: isLight ? "dark" : "light",
      }),
    );
  };

  const handleMenuBar = useCallback(() => {
    dispatch(changeDrawerState());
  }, [dispatch]);

  const menuIconClasses = useMemo(() => {
    return clsx({
      "text-3xl": true,
      "text-ownBlack-100": true,
      "dark:text-ownMint-200": true,
      ...customMenuIconClasses,
    });
  }, [customMenuIconClasses]);

  // const navCLasses = useMemo(() => {
  //   return clsx(["flex", "justify-between", "bg-white", "dark:bg-black",]);
  // }, [isLight, textColor, borderColor, backgroundColor]);

  return (
    <ResponsiveContainer
      customClasses={{
        "border-b": true,
        // "border-solid" : true,
        "border-b-ownGray-100": true,
        "dark:border-b-ownGray-200": true,
        "sticky top-0": true,
        "z-20": true,
        // "border-none" : true,
      }}
    >
      <nav className="dark:bg-ownBlack-100 dark:text-ownMint-100 text-ownBlack-100 flex h-20 items-center justify-between ">
        <TextIcon
          // text={`</>`}
          customClasses={{
            "text-ownMint-200": true,
            "text-xl": true,
            "md:text-3xl": true,
            "sm:block": true,
            hidden: true,
          }}
        >
          <span className="text-ownBlack-100 ml-3 text-xl dark:text-white md:text-2xl lg:text-3xl font-semibold">
            Aike.
          </span>
        </TextIcon>
        <TextIcon
          // text={`<A/>`}
          customClasses={{
            "text-ownMint-200": true,
            "text-2xl": true,
            block: true,
            "sm:hidden": true,
          }}
        >Aike.</TextIcon>
        <div className="flex h-full w-fit absolute left-1/2 top-0 -translate-x-1/2">
          <NavItem
            link={{
              href: "/",
            }}
            customClasses={{
              hidden: true,
              "sm:flex": true,
              // absolute: true,
              // "left-1/2": true,
              // "top-0": true,
              "py-2": true,
              // "-translate-x-1/2" : true
            }}
          >
            {/* <DevIcon /> */}
            <CustomLogo primaryText={"Aike"} />
          </NavItem>

          {/* <NavItem
            link={{
              href: "/blogs",
              text: "Blogs",
            }}
            customClasses={{
              hidden: true,
              "sm:flex": true,
            }}
          /> */}
        </div>
        <div className="flex gap-x-5 items-center">
          {/* <SwitchBtn /> */}
          <Example/>
          <span className="md:hidden  flex items-center">
            <Icon className={menuIconClasses} onClick={handleMenuBar}>
              {isDrawerOpen ? "close" : "menu"}
            </Icon>
          </span>
        </div>
      </nav>
    </ResponsiveContainer>
  );
};
