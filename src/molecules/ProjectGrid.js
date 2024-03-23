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

function ProjectGrid({ projects, handleActivePrj, projectImages }) {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        sx={{
          zIndex: 100,
          height: "auto",
        }}
        TransitionProps={{
          style: {
            transitionDelay: 300,
          },
        }}
      >
        {/* <Carousel
          sx={{
            pb: 4,
            width: "100%",
            height: "fit-content",
          }}
          autoPlay={false}
          duration={0}

        >
          {projectImages &&
            projectImages.length > 0 &&
            projectImages.map((img, idx) => (
              <ProjectCaroItem key={idx} img={img} />
            ))}
        </Carousel> */}

        <ImageGallery
          items={
            projectImages &&
            projectImages.length > 0 &&
            projectImages.map((img, idx) => ({
              original: img.src,
              thumbnail: img.src,
              loading: "eager",
              description: img.title,
            }))
          }
          slideInterval={4000}
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
      </Dialog>

      {/* <ImageGallery
        items={
          projectImages &&
          projectImages.length > 0 &&
          projectImages.map((img, idx) => ({
            original: img.src,
            thumbnail: img.src,
          }))
        }
      /> */}
    </div>
  );
}

export default ProjectGrid;
