import { clsx } from "clsx";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const TextIcon = ({
  children,
  text,
  handleClick,
  href,
  customClasses,
  customStyles,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const textIconClasses = useMemo(() => {
    return clsx({
      "cursor-pointer": true,
      "select-none": true,
      "text-ownMint-200": !isLight,
      ...customClasses,
    });
  }, [isLight, customClasses]);

  if (href) {
    return (
      <Link href={href} className={textIconClasses}>
        {text}
        {children}
      </Link>
    );
  }
  return (
    <div
      className={textIconClasses}
      onClick={handleClick}
      style={{
        ...customStyles,
      }}
    >
      {text}
      {children}
    </div>
  );
};
