import { clsx } from "clsx";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const TextWithIcon = ({
  children,
  customClasses,
  customStyles,
  href,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const textWithIconClasses = useMemo(() => {
    return clsx({
      "cursor-pointer": href,
      "hover:underline": href,
      "select-none": true,
      "text-ownBlack-200": true,
      "dark:text-white": true,
      flex: true,
      //   "flex-wrap" : true,
      "items-center": true,
      "my-2": true,
      ...customClasses,
    });
  }, [customClasses, href]);
  if (href) {
    return (
      <Link href={href} className={textWithIconClasses} target="_blank">
        {children}
      </Link>
    );
  } else {
    return <div className={textWithIconClasses}>{children}</div>;
  }
};
