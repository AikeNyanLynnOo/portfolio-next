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

export const ExpTimeline2 = ({ customStyles, customClasses, experiences }) => {
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
        "rounded-xl": true,
        "px-2": true,
        "md:px-5": true,
        "py-5": true,
      }),
    [isLight, hoveredExp],
  );
  return (
    <div className={timelineClasses}>
      {experiences &&
        experiences.length > 0 &&
        experiences.map((exp, idx) => (
          <div
            className={getExpClasses(idx)}
            key={idx}
            onMouseEnter={() => dispatch(changeHoveredExp(idx))}
            onMouseLeave={() => dispatch(changeHoveredExp(null))}
          >
            <div className="w-10 md:w-16 text-end mr-4">
              <span className="text-xs text-ownBlack-200 dark:text-white">
                {exp.fromYear}-{exp.toYear}
              </span>
            </div>
            <IconWithTimeline
              isExpHovered={hoveredExp !== null && hoveredExp === idx}
            />
            <div className="grow pt-0.5">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white mb-2 items-center">
                {/* <svg
                  className="flex-shrink-0 size-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg> */}
                <Icon
                  style={{
                    fontSize: "15px",
                  }}
                >
                  laptop_mac
                </Icon>

                {exp.jobTitle}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {exp.description}
              </p>
              <div className="my-5 flex flex-wrap">
                {exp.techs &&
                  exp.techs.length > 0 &&
                  exp.techs.map((tech, idx) => (
                    <Fragment key={idx}>
                      <CustomChip
                        label={tech}
                        customStyles={{
                          fontSize: "5px",
                        }}
                        customClasses={{
                          "leading-6": true,
                          "py-0": true,
                          "px-1": true,
                          "my-1": true,
                        }}
                      />
                    </Fragment>
                  ))}
              </div>
              {exp.companyName && (
                <TextWithIcon href={exp.companyLink || "/"}>
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
                    business
                  </Icon>
                  <Typography
                    text={exp.companyName}
                    customClasses={{
                      "text-ownBlack-200": true,
                      "dark:text-white": true,
                      "text-sm": true,
                      "text-center": true,
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
        ))}

      {/* <div className="flex gap-x-3">
        <div className="w-16 text-end">
          <span className="text-xs text-gray-500 dark:text-gray-400">12:05PM</span>
        </div>
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>
        <div className="grow pt-0.5 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            Release v5.2.0 quick bug fix 🐞
          </h3>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
              A
            </span>
            Alex Gregarov
          </button>
        </div>
      </div>
      <div className="flex gap-x-3">
        <div className="w-16 text-end">
          <span className="text-xs text-gray-500 dark:text-gray-400">12:05PM</span>
        </div>
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>
        <div className="grow pt-0.5 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            Marked &quot;Install Charts&quot; completed
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Finally! You can check it out here.
          </p>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            James Collins
          </button>
        </div>
      </div>
      <div className="flex gap-x-3">
        <div className="w-16 text-end">
          <span className="text-xs text-gray-500 dark:text-gray-400">12:05PM</span>
        </div>

        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            Take a break ⛳️
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Just chill for now... 😉
          </p>
        </div>
      </div> */}
    </div>
  );
};
