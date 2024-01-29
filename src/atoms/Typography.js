import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const Typography = ({ text, customClasses, customStyles, children }) => {
  const { isLight } = useSelector((state) => state.theme);
  const typoClasses = useMemo(() => {
    return clsx({
      "select-none": true,
      "text-ownBlack-200": true,
      "dark:text-ownMint-200": true,
      ...customClasses,
    });
  }, [customClasses]);
  return (
    <p
      className={typoClasses}
      style={{
        ...customStyles,
      }}
    >
      {text}
      {children}
    </p>
  );
};
