import { useDispatch, useSelector } from "react-redux";
import { switchThemeRequest } from "../store/slices/themeSlice";
import { useEffect, useMemo } from "react";
import { clsx } from "clsx";
import { SwitchBtn } from "./SwitchBtn";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { TextIcon } from "../atoms/TextIcon";
import { NavItem } from "./NavItemComponent";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);

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
        "z-10": true,
        // "border-none" : true,
      }}
    >
      <nav className="dark:bg-ownBlack-100 dark:text-ownMint-100 text-ownBlack-100 flex h-20 items-center justify-between bg-white">
        <TextIcon
          text={`</>`}
          customClasses={{
            "text-ownMint-200": true,
            "text-xl": true,
            "md:text-3xl": true,
            "sm:block": true,
            hidden: true,
          }}
        >
          <span className="text-ownBlack-100 ml-3 text-xl dark:text-white md:text-2xl lg:text-3xl">
            Aike
          </span>
        </TextIcon>
        <TextIcon
          text={`<A/>`}
          customClasses={{
            "text-ownMint-200": true,
            "text-2xl": true,
            block: true,
            "sm:hidden": true,
          }}
        ></TextIcon>
        <div className="flex h-full">
          <NavItem
            link={{
              href: "/",
              text: "Home",
            }}
            customClasses={{
              hidden: true,
              "sm:flex": true,
            }}
          />
          <NavItem
            link={{
              href: "/blogs",
              text: "Blogs",
            }}
          />
        </div>
        <SwitchBtn />
      </nav>
    </ResponsiveContainer>
  );
};
