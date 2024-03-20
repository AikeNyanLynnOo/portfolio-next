import React from "react";
import { ProjectCard } from "./ProjectCard";
import Carousel from "react-material-ui-carousel";

// import { Carousel } from "@material-tailwind/react";
import { Dialog, DialogTitle, DialogContent, Modal } from "@mui/material";
import { useState } from "react";
import { ProjectCaroItem, ProjectCarouselItem } from "./ProjectCaroItem";

function ProjectGrid({ projects, handleActivePrj, projectImages }) {
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
        transitionDuration={10}
      >
        <Carousel
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
        </Carousel>
      </Dialog>

      {/* <Carousel
        sx={{
          // border : "10px solid blue",
          width: "100%",
          height: "fit-content",
        }}
        autoPlay={false}
      >
        {projectImages &&
          projectImages.length > 0 &&
          projectImages.map((img, idx) => (
            <ProjectCaroItem key={idx} img={img} />
          ))}
      </Carousel> */}
    </div>
  );
}

export default ProjectGrid;
