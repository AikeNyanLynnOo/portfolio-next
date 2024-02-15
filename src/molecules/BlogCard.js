import Image from "next/image";
import { CustomChip } from "./CustomChip";
import { Fragment } from "react";

export const BlogCard = ({
  customClasses,
  customStyles,
  title,
  isNew,
  techs,
  introText,
  blogDate,
  link,
}) => {
  return (
    <a
      class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={link || "#"}
    >
      <div class="sm:flex">
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image
            height={100}
            width={100}
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
            src="/images/projects/jkt_ss.png"
            alt="Image Description"
          />
        </div>

        <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3
            class="text-xl flex items-center font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white"
            style={{
              fontFamily: '"Varela Round", sans-serif',
            }}
          >
            {title || "Studio by Preline"}
            {isNew && (
              <CustomChip
                label="New"
                customClasses={{
                  "py-0": true,
                  "px-2": true,
                  "ml-2": true,
                  "text-sm": true,
                  "bg-teal-950" : false,
                  "bg-red-400": true,
                  "dark:bg-ownMint-200": true,
                  "dark:text-ownBlack-200": true,
                }}
              />
            )}
          </h3>
          <p
            class="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-6"
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
                      "py-0": true,
                      "px-1": true,
                      "my-1": true,
                      "border-ownMint-100": false,
                      "border-gray-200": true,
                    }}
                  />
                </Fragment>
              ))}
          </div>
          <p
            class="mt-2 mb-4 text-gray-600 dark:text-gray-400 text-sm leading-6"
            style={{
              fontFamily: '"Varela Round", sans-serif',
            }}
          >
            Posted: {blogDate || "16/02/2024"}
          </p>
          <p
            class="inline-flex items-center gap-x-1 text-purple-700 dark:text-ownMint-200 decoration-2 hover:underline font-medium"
            style={{
              fontFamily: '"Varela Round", sans-serif',
            }}
          >
            Read more
            <svg
              class="flex-shrink-0 size-4"
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </div>
    </a>
  );
};
