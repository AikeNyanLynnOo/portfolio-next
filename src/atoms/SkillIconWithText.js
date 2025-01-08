import { Icon } from "@mui/material";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export const SkillIconWithText = ({
  index,
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
      "z-10": true,
      "cursor-pointer": true,
      "select-none": true,
      "text-center": true,
      "md:px-4": true,
      "px-2": true,
      "py-5": true,
      "md:min-w-28": true,
      "min-w-20": true,
      "rounded-lg": true,
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
      "object-contain": true,
      // filter: true,
      // grayscale: true,
      ...customSkillIconClasses,
    });
  }, [customSkillIconClasses]);

  const skillTextClasses = useMemo(() => {
    return clsx({
      "z-10": true,
      "py-5": true,
      "text-base": true,
      "text-ownBlack-200": true,
      "dark:text-ownMint-200": true,
      ...customSkillTextClasses,
    });
  }, [customSkillTextClasses]);

  if (href) {
    return (
      <div
        className={skillIconWithTextClasses}
        // initial={{ y: 20, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // transition={{
        //   ease: "linear",
        //   delay: 0.05 * index,
        //   type: "spring",
        //   stiffness: 400,
        // }}
        // viewport={{
        //   once: true,
        // }}
      >
        <Link href={href}>
          {(isMaterialIcon && <Icon>{icon}</Icon>) || (
            <Image
              src={icon}
              alt="skill_icon"
              height={1000}
              width={1000}
              className={skillIconClasses}
              style={{
                filter: "grayscale(10%)",
              }}
            />
          )}
          <span className={skillTextClasses}>{text}</span>
          {children}
        </Link>
      </div>
    );
  }
  return (
    <div
      className={skillIconWithTextClasses}
      onClick={handleClick}
      style={{
        ...customStyles,
      }}
      // initial={{ y: 20, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{
      //   ease: "linear",
      //   delay: 0.05 * index,
      //   type: "spring",
      //   stiffness: 400,
      // }}
      // viewport={{
      //   once: true,
      // }}
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
