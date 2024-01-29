import { clsx } from "clsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const LandingText = ({ children, customClasses, customStyles }) => {
  const { isLight } = useSelector((state) => state.theme);
  const landingTextClasses = useMemo(() => {
    return clsx({
      "h-3/4": true,
      "w-4/6": true,
      "bg-ownBlack-200": true,
      ...customClasses,
    });
  }, [customClasses]);

  return <div className={landingTextClasses}>landing text</div>;
};
