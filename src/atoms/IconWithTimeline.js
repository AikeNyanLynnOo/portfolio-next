import { Icon } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CircleIcon } from "./CircleIcon";

export const IconWithTimeline = ({
  icon,
  disableCircleAnimation,
  customIconStyles,
  isExpHovered,
}) => {
  const { isLight } = useSelector((state) => state.theme);

  return (
    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
      <div className="relative z-5 size-7 flex justify-center items-center mb-5">
        <Icon
          style={{
            fontSize: "10px",
            ...customIconStyles,
          }}
          className="dark:text-ownMint-200 text-ownBlack-200"
        >
          {icon || "work"}
        </Icon>
        {!disableCircleAnimation && (
          <CircleIcon isExpHovered={isExpHovered} circleSize={30} />
        )}
      </div>
    </div>
  );
};
