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
      <nav className="dark:bg-ownBlack-100 dark:text-ownMint-100 text-ownBlack-100 flex h-20 items-center justify-between bg-black">
        <TextIcon
          text={`</>`}
          customClasses={{
            "text-ownMint-200": true,
            "text-xl": true,
            "md:text-2xl": true,
            "lg:text-3xl": true,
          }}
        >
          <span className="text-ownBlack-100 ml-3 text-xl dark:text-white md:text-2xl lg:text-3xl">
            Aike
          </span>
        </TextIcon>
        <div className="flex h-full">
          {[
            {
              href: "/",
              text: "Home",
            },
            {
              href: "/blogs",
              text: "Blogs",
            },
          ].map((link, index) => (
            <NavItem link={link} key={index} />
          ))}
        </div>
        <SwitchBtn />
      </nav>
    </ResponsiveContainer>
  );
};
