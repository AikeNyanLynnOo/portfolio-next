import { Icon } from "@mui/material";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const SkillIconWithText = ({
  children,
  icon,
  isMaterialIcon,
  text,
  handleClick,
  href,
  customClasses,
  customStyles,
  customSkillIconClasses,
  customSkillTextClasses,
}) => {
  const { isLight } = useSelector((state) => state.theme);
  const skillIconWithTextClasses = useMemo(() => {
    return clsx({
      "cursor-pointer": true,
      "select-none": true,
      "text-center": true,
      "md:px-4": true,
      "px-2" : true,
      "py-5": true,
      "md:min-w-28" : true,
      "min-w-20" : true,
      "hover:shadow-lg": true,
      ...customClasses,
    });
  }, [customClasses]);

  const skillIconClasses = useMemo(() => {
    return clsx({
      "h-12": true,
      "w-12": true,
      "mb-3": true,
      "mx-auto": true,
      ...customSkillIconClasses,
    });
  }, [customSkillIconClasses]);

  const skillTextClasses = useMemo(() => {
    return clsx({
      "py-5": true,
      "text-base": true,
      "text-ownBlack-200": true,
      "dark:text-ownMint-200": true,
      ...customSkillTextClasses,
    });
  }, [customSkillTextClasses]);

  if (href) {
    return (
      <Link href={href} className={skillIconWithTextClasses}>
        {(isMaterialIcon && <Icon>{icon}</Icon>) || (
          <Image
            src={icon}
            alt="skill_icon"
            height={1000}
            width={1000}
            className={skillIconClasses}
          />
        )}
        <span className={skillTextClasses}>{text}</span>
        {children}
      </Link>
    );
  }
  return (
    <div
      className={skillIconWithTextClasses}
      onClick={handleClick}
      style={{
        ...customStyles,
      }}
    >
      {(isMaterialIcon && <Icon>{icon}</Icon>) || (
        <Image
          src={icon}
          alt="skill_icon"
          height={1000}
          width={1000}
          className={skillIconClasses}
        />
      )}
      <span className={skillTextClasses}>{text}</span>
      {children}
    </div>
  );
};
