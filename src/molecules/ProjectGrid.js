import React from "react";
import { ProjectCard } from "./ProjectCard";
import Carousel from "react-material-ui-carousel";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// import { Carousel } from "@material-tailwind/react";
import { Dialog, DialogTitle, DialogContent, Modal } from "@mui/material";
import { useState } from "react";
import { ProjectCaroItem, ProjectCarouselItem } from "./ProjectCaroItem";
import { Description } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import { CustomImgGalleryWithDialog } from "./CustomImgGalleryWithDialog";
import { useSelector } from "react-redux";

import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

function ProjectGrid({ projects, handleActivePrj, projectImages }) {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLight } = useSelector((state) => state.theme);

  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=" mx-auto my-10 w-full">
      <div className="flex flex-wrap justify-center w-full mx-auto">
        {projects &&
          projects.map((pj, index) => (
            <div
              key={index}
              // className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
              className="w-full lg:w-1/2 xl:w-4/12 px-0 sm:px-4 mb-8"
            >
              <ProjectCard
                index={index}
                title={pj.title}
                introText={pj.introText}
                projectMedia={pj.projectMedia}
                techs={pj.techs}
                liveLink={pj.liveLink}
                githubLink={pj.githubLink}
                handleClick={() => {
                  setIsModalOpen(true);
                  handleActivePrj(index);
                }}
              />
            </div>
          ))}
      </div>

      <CustomImgGalleryWithDialog
        projectImages={projectImages}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      />
    </div>
  );
}

export default ProjectGrid;
