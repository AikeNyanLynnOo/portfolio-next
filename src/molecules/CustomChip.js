import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const CustomChip = ({
  children,
  customClasses,
  label,
  customStyles,
  href,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const chipClasses = useMemo(() => {
    return clsx({
      "cursor-pointer": href,
      "hover:underline": href,
      "select-none": true,
      "text-white": true,
      "dark:text-gray-50": true,
      "bg-teal-950": true,
      "dark:bg-ownBlack-100": true,
      "dark:border": true,
      "border-ownMint-100": true,
      "rounded-full": true,
      "text-sm": true,
      "px-1": true,
      "mr-1": true,
      ...customClasses,
    });
  }, [customClasses, href]);
  return (
    <span
      className={chipClasses}
      style={{
        ...customStyles,
      }}
    >
      {label}
      {children}
    </span>
  );
};
