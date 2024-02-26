import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const ResponsiveContainer = ({
  children,
  customClasses,
  bottomBottom,
  scrollRef,
}) => {
  //   const { isLight } = useSelector((state) => state.theme);
  const containerCLasses = useMemo(() => {
    return clsx({
      relative: true,
      "z-1": true,
      "dark:bg-ownBlack-100": true,
      "text-ownBlack-100": true,
      "bg-white": true,
      "px-4": true,
      "dark:text-white": true,
      "sm:px-7": true,
      "md:px-16": true,
      "lg:px-28": true,
      "xl:px-40": true,
      ...customClasses,
    });
  }, [customClasses]);
  return (
    <div className={`${containerCLasses}`} ref={scrollRef}>
      {children}
    </div>
  );
};
