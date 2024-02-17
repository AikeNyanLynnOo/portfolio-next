import { Icon } from "@mui/material";
import { IconWithTimeline } from "../atoms/IconWithTimeline";
import { TextWithIcon } from "../molecules/TextWithIcon";
import { Typography } from "../atoms/Typography";
import { useMemo } from "react";
import { clsx } from "clsx";

export const AchievementCard2 = ({
  icon,
  title,
  subTitle,
  description,
  org,
  orgIcon,
  orgLink,
  date,
}) => {
  const achievementClasses = useMemo(
    () =>
      clsx({
        flex: true,
        "gap-x-3": true,
        "justify-center": true,
        // "bg-gray-100": isLight && idx === hoveredExp,
        // "dark:bg-ownBlack-100": !isLight && idx === hoveredExp,
        "rounded-2xl": true,
        "px-2": true,
        "md:px-5": true,
        "py-5": true,
      }),
    [],
  );
  return (
    <div
      className={achievementClasses}
      //   className={getExpClasses(idx)}
      //   key={idx}
      //   onMouseEnter={() => dispatch(changeHoveredExp(idx))}
      //   onMouseLeave={() => dispatch(changeHoveredExp(null))}
    >
      <div className="w-fit pt-1">
        <span
          className="text-sm block p-0 w-fit text-ownBlack-200 dark:text-white text-right"
          style={{
            fontFamily: '"Varela Round", sans-serif',
          }}
        >
          {date}
        </span>
      </div>
      <IconWithTimeline
        isExpHovered={true}
        disableCircleAnimation
        icon={icon || "emoji_events"}
        customIconStyles={{
          fontSize: "20px",
        }}
      />
      <div className="grow pt-0.5">
        <h3 className="flex gap-x-1.5 font-semibold text-xl text-gray-800 dark:text-white mb-2 items-center">
          {/* <Icon
            style={{
              fontSize: "15px",
            }}
          >
            laptop_mac
          </Icon> */}

          {title || "Bachelor of Computer Science"}
        </h3>
        <p
          className="my-3 text-gray-600 text-lg dark:text-gray-400 leading-6"
          style={{
            fontFamily: '"Varela Round", sans-serif',
            // fontSize: "15px",
          }}
        >
          {subTitle || ""}
        </p>
        <p
          className="mt-1 text-gray-600 dark:text-gray-400 text-justify leading-6"
          style={{
            fontFamily: '"Varela Round", sans-serif',
            fontSize: "13px",
          }}
        >
          {description || ""}
        </p>

        {org && (
          <TextWithIcon
            href={orgLink || "#"}
            customClasses={{
              "my-3": true,
            }}
          >
            <Icon
              sx={
                {
                  // transform: "rotate(135deg)",
                }
              }
              style={{
                fontSize: "15px",
              }}
            >
              {orgIcon || "business"}
            </Icon>
            <Typography
              text={org || "University of Information Technology"}
              customClasses={{
                "text-ownBlack-200": true,
                "dark:text-white": true,
                "text-sm": true,
                "ml-1": true,
                underline: true,
              }}
              customStyles={{
                fontFamily: '"Varela Round", sans-serif',
              }}
            />
          </TextWithIcon>
        )}
      </div>
    </div>
  );
};
