import { Icon } from "@mui/material";
import { clsx } from "clsx";
import { useMemo } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconWithTimeline } from "../atoms/IconWithTimeline";
import { CustomChip } from "../molecules/CustomChip";
import { changeHoveredExp } from "../store/slices/generalSlice";
import { useCallback } from "react";
import { TextWithIcon } from "../molecules/TextWithIcon";
import { Typography } from "../atoms/Typography";
import { AchievementCard2 } from "./AchievementCard2";

export const AchievementTimeline = ({
  customStyles,
  customClasses,
  achievements,
}) => {
  const dispatch = useDispatch();
  const { isLight } = useSelector((state) => state.theme);
  const { hoveredExp } = useSelector((state) => state.general);
  const timelineClasses = useMemo(() => {
    return clsx({
      "select-none": true,
      //   "bg-red-100": true,
      "my-10": true,
      "w-fit": true,
      "mx-auto": true,
      ...customClasses,
    });
  }, [customClasses]);
  const getExpClasses = useCallback(
    (idx) =>
      clsx({
        flex: true,
        "gap-x-3": true,
        "justify-center": true,
        "bg-gray-100": isLight && idx === hoveredExp,
        "dark:bg-ownBlack-100": !isLight && idx === hoveredExp,
        "rounded-2xl": true,
        "px-2": true,
        "md:px-5": true,
        "py-5": true,
      }),
    [isLight, hoveredExp],
  );
  return (
    <div className={timelineClasses}>
      {achievements &&
        achievements.length > 0 &&
        achievements.map((ach, idx) => (
          <Fragment key={idx}>
            <AchievementCard2 {...ach} />
          </Fragment>
        ))}
    </div>
  );
};
