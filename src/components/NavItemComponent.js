import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const NavItem = ({ link, children, customClasses, customStyles }) => {
  const router = useRouter();
  const { isLight } = useSelector((state) => state.theme);
  const navItemClasses = useMemo(() => {
    return clsx({
      "select-none": true,
      "flex" : true,
      "items-center" : true,
      "h-full" : true,
      "text-ownMint-400":
        router.pathname === link.href
          ? isLight
            ? true
            : false
          : isLight
            ? false
            : false,
      "text-ownBlack-200":
        router.pathname === link.href
          ? isLight
            ? false
            : false
          : isLight
            ? true
            : false,
      "text-white":
        router.pathname === link.href
          ? isLight
            ? false
            : false
          : isLight
            ? false
            : true,
      "mx-3": true,
      ...customClasses,
    });
  }, [isLight, customClasses, link.href, router.pathname]);
  return (
    <Link
      href={link.href || "/"}
      className={navItemClasses}
      style={{
        ...customStyles,
      }}
    >
      {link.text}
      {children}
    </Link>
  );
};
