import Image from "next/image";
import { CustomChip } from "./CustomChip";
import { Fragment } from "react";
import { TextWithIcon } from "./TextWithIcon";
import { Typography } from "../atoms/Typography";
import { Icon } from "@mui/material";
import Link from "next/link";
import { CustomTooltip } from "./CustomTooltip";

// framer motion
import { motion } from "framer-motion";

export const BlogCard = ({
  index,
  customClasses,
  customStyles,
  title,
  blogMedia,
  isNew,
  techs,
  introText,
  blogDate,
  link,
  externalLink,
}) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        ease: "linear",
        delay: 0.1 * index,
        type: "spring",
        stiffness: 400,
      }}
      viewport={{
        once: true,
      }}
      className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 my-4"
    >
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44 border">
          <Image
            height={1000}
            width={1000}
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl z-10"
            src={blogMedia || "/images/blogs/sm_ss.png"}
            alt="Image Description"
          />
        </div>

        <div className="mt-4 sm:mt-0 sm:ms-6 px-0 md:px-4">
          <h3
            className="text-xl flex font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white"
            style={{
              fontFamily: '"Varela Round", sans-serif',
            }}
          >
            <CustomTooltip
              arrow
              title={
                <div>
                  <Typography
                    text={title || ""}
                    customClasses={{
                      "line-clamp-3": true,
                      "leading-6": true,
                      "text-ownBlack-100": true,
                      "dark:text-ownMint-200": false,
                      "dark:text-ownBlack-100": true,
                    }}
                    customStyles={{
                      fontFamily: '"Varela Round", sans-serif',
                    }}
                  />
                </div>
              }
              placement="top"
            >
              <div>
                <Typography
                  text={title || ""}
                  customClasses={{
                    "line-clamp-3": true,
                    "z-10": true,
                  }}
                />
              </div>
            </CustomTooltip>
            {isNew && (
              <CustomChip
                label="New"
                customClasses={{
                  "h-fit": true,
                  "py-0": true,
                  "px-2": true,
                  "ml-2": true,
                  "mt-2": true,
                  "text-sm": true,
                  "bg-teal-950": false,
                  "bg-red-400": true,
                  "dark:bg-ownMint-200": true,
                  "dark:text-ownBlack-200": true,
                }}
              />
            )}
          </h3>
          <p
            className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-6 line-clamp-3"
            style={{
              fontFamily: '"Varela Round", sans-serif',
            }}
          >
            {introText ||
              "Produce professional, reliable streams easily leveraging Preline innovative broadcast studio"}
          </p>
          <div className="flex flex-wrap mt-4">
            {techs &&
              techs.length > 0 &&
              techs.map((tech, idx) => (
                <Fragment key={idx}>
                  <CustomChip
                    label={tech}
                    customStyles={{
                      fontSize: "11px",
                    }}
                    customClasses={{
                      "py-0.5": true,
                      "px-2": true,
                      "my-1": true,
                      "border-ownMint-100": false,
                      "border-gray-200": true,
                    }}
                  />
                </Fragment>
              ))}
          </div>
          <p
            className="mt-2 mb-4 text-gray-600 dark:text-gray-400 text-sm leading-6"
            style={{
              fontFamily: '"Varela Round", sans-serif',
            }}
          >
            Posted: {blogDate || "16/02/2024"}
          </p>
          <Link
            className="inline-flex items-center gap-x-1 text-purple-700 dark:text-ownMint-200 decoration-2 hover:underline font-medium text-sm"
            style={{
              fontFamily: '"Varela Round", sans-serif',
            }}
            href={externalLink || "#"}
            target="_blank"
          >
            Read more
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
