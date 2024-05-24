import React, { useEffect } from "react";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { Typography } from "../atoms/Typography";
import { CustomChip } from "./CustomChip";
import CustomIconButtonLink from "./CustomIconButtonLink";
import { Divider, Icon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { darkTheme } from "../Theme/styles";
import { useSelector } from "react-redux";

function ProjectsContainer({ projects, projectImages }) {
  const { isLight } = useSelector((state) => state.theme);
  const [active, setActive] = useState(0);

  const [project, setProject] = useState(projects[0]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 py-10">
      <div className="h-auto w-full xl:w-11/12 px-0 py-5 xl:py-0 border border-t border-l-0 border-b-0 border-r-0 border-gray-300 dark:border-ownMint-100">
        {projects &&
          projects.length > 0 &&
          projects.map((project, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  setActive(index);
                  setProject(project);
                }}
                className={`flex justify-between items-center font-semibold text-ownGray-300 dark:text-ownGray-100 text-2xl xl:text-3xl 2xl:text-4xl my-5 py-2 hover:text-ownBlack-100 hover:drop-shadow-xl hover:font-bold border-r-0 border-t-0 border-b-0 p-5 ${active === index ? "border border-l-8 border-ownMint-200" : "border-0"}`}
              >
                <span>{project.title}</span>
                {active === index && (
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-ownMint-100 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-ownMint-200"></span>
                  </span>
                )}
              </div>
              <Divider
                sx={{
                  backgroundColor: isLight ? "#E5E7EB" : "#98FAEC",
                }}
              />
            </div>
          ))}
      </div>
      <div className="h-auto w-full rounded-2xl overflow-hidden shadow-sm">
        <ImageGallery
          items={
            project &&
            project.projectImages &&
            project.projectImages.length > 0 &&
            project.projectImages.map((img, idx) => ({
              original: img.src,
              thumbnail: img.src,
              loading: "eager",
              description: img.title,
            }))
          }
          slideInterval={6000}
          showIndex
          // showBullets
          autoPlay
          renderLeftNav={(onClick, disabled) => (
            <KeyboardArrowLeftIcon
              onClick={onClick}
              disabled={disabled}
              sx={{
                position: "absolute",
                zIndex: 10,
                left: 10,
                top: "50%",
                height: "50px",
                width: "50px",
                color: "#ffffff",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}
          renderRightNav={(onClick, disabled) => (
            <KeyboardArrowRightIcon
              onClick={onClick}
              disabled={disabled}
              sx={{
                position: "absolute",
                zIndex: 10,
                right: 10,
                top: "50%",
                height: "50px",
                width: "50px",
                color: "#ffffff",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}
        />

        <div className="py-10">
          <Typography
            text={(project && project.introText) || ""}
            customClasses={{
              "mb-2": true,
              //   "text-sm": true,
              "text-ownBlack-100": true,
              "dark:text-white": true,
              //   "overflow-scroll": true,
              "min-h-10": true,
              //   "max-h-16": true,
              //   "line-clamp-3": true,
              "text-justify": true,
              "leading-7": true,
            }}
          />
          <div className="mt-5 flex flex-wrap min-h-12">
            {project &&
              project.techs &&
              project.techs.length > 0 &&
              project.techs.map((tech, idx) => (
                <span key={idx}>
                  <CustomChip
                    label={tech}
                    customStyles={{
                      fontSize: "14px",
                    }}
                    customClasses={{
                      "py-2": true,
                      "px-3": true,
                      "my-1": true,
                      "inline-block": true,
                      "border-ownMint-100": false,
                      "border-gray-200": true,
                    }}
                  />
                </span>
              ))}
          </div>

          <div className="w-full flex justify-center gap-x-10 py-8">
            {project && project.githubLink && (
              <CustomIconButtonLink href={project.githubLink}>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="github"
                  fill="ffffff"
                >
                  <path d="M14.5 23.862a.5.5 0 0 1-.5-.5v-3.72c0-.899-.115-1.537-.363-2.005a.5.5 0 0 1 .329-.72C16.93 16.233 19 14.064 19 11.642c0-1.2-.493-2.345-1.425-3.312a.5.5 0 0 1-.094-.558c.372-.802.293-1.894-.148-2.549-.583.228-1.34.705-1.832 1.289a.496.496 0 0 1-.554.147 8.67 8.67 0 0 0-5.893 0 .5.5 0 0 1-.554-.146c-.492-.584-1.249-1.061-1.833-1.289-.441.655-.52 1.747-.148 2.549a.498.498 0 0 1-.094.557C5.493 9.297 5 10.443 5 11.642c0 2.307 1.863 4.385 4.636 5.17a.501.501 0 0 1 .364.482v.349c0 .626-.251.979-.462 1.166-.452.397-1.036.337-1.1.33h-.01c-.824 0-1.444-.459-2.043-.903-.301-.223-.606-.45-.961-.638.077.104.153.211.23.318.75 1.043 1.599 2.226 2.847 2.226h1a.5.5 0 0 1 .5.5v2.72a.5.5 0 0 1-.608.488C3.95 22.642 0 17.719 0 12.142c0-6.617 5.383-12 12-12s12 5.383 12 12c0 5.576-3.95 10.5-9.392 11.708a.497.497 0 0 1-.108.012zm.258-6.121c.164.517.242 1.137.242 1.901v3.078c4.671-1.326 8-5.677 8-10.578 0-6.065-4.935-11-11-11s-11 4.935-11 11c0 4.901 3.329 9.252 8 10.578v-1.578h-.5c-1.76 0-2.813-1.465-3.659-2.643-.479-.667-.975-1.357-1.341-1.357a.5.5 0 0 1 0-1c1.74 0 2.705.715 3.48 1.29.536.397.958.71 1.52.71.056.003.263.018.379-.086.095-.086.119-.257.121-.392-3.006-.987-5-3.368-5-6.021 0-1.364.512-2.66 1.484-3.766-.429-1.243-.164-2.761.662-3.588a.494.494 0 0 1 .481-.13c.668.177 1.66.696 2.401 1.451a9.706 9.706 0 0 1 5.941 0c.741-.755 1.733-1.274 2.401-1.451a.493.493 0 0 1 .481.13c.827.827 1.091 2.345.662 3.587C19.488 8.983 20 10.279 20 11.642c0 2.728-2.127 5.17-5.242 6.099z"></path>
                </svg> */}
                <GitHubIcon />
              </CustomIconButtonLink>
            )}
            {project && project.liveLink && (
              <CustomIconButtonLink href={project.liveLink}>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  fill="none"
                  viewBox="0 0 128 128"
                  id="external-link"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-width="7"
                    d="M67.5 15L64.5 15C44.347 15 34.2706 15 27.1934 20.1105C24.8537 21.8 22.8 23.8537 21.1105 26.1934C16 33.2706 16 43.3471 16 63.5V63.5C16 83.653 16 93.7294 21.1105 100.807C22.8 103.146 24.8537 105.2 27.1934 106.89C34.2706 112 44.347 112 64.5 112V112C84.653 112 94.7294 112 101.807 106.89C104.146 105.2 106.2 103.146 107.89 100.807C113 93.7294 113 83.653 113 63.5V63.5"
                  ></path>
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="7"
                    d="M112.012 44.4263L112.012 16.142L83.7279 16.142"
                  ></path>
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-width="7"
                    d="M65.0122 63.1421L112.012 16.1421"
                  ></path>
                </svg> */}
                <Icon>arrow_outward</Icon>
              </CustomIconButtonLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
