import React from "react";
import { ProjectCard } from "./ProjectCard";

function ProjectGrid({ projects }) {
  return (
    // <div className="container mx-auto my-5">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-100">
    //     <div className="bg-white rounded-lg shadow-lg mx-auto">
    //       <div className="p-4">
    //         <h2 className="text-xl font-semibold">Card 1</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </div>
    //     </div>
    //     <div className="bg-white rounded-lg shadow-lg">
    //       <div className="p-4">
    //         <h2 className="text-xl font-semibold">Card 2</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </div>
    //     </div>
    //     <div className="bg-white rounded-lg shadow-lg">
    //       <div className="p-4">
    //         <h2 className="text-xl font-semibold">Card 3</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </div>
    //     </div>
    //     <div className="bg-white rounded-lg shadow-lg">
    //       <div className="p-4">
    //         <h2 className="text-xl font-semibold">Card 4</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto my-10 w-full">
      <div className="flex flex-wrap justify-center w-full lg:w-10/12 mx-auto">
        {projects &&
          projects.map((pj, index) => (
            <div
              key={index}
              // className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
              className="w-full sm:w-1/2 md:w-1/2 lg:w-4/12 px-0 sm:px-4 mb-8"
            >
              <ProjectCard
                title={pj.title}
                introText={pj.introText}
                projectMedia={pj.projectMedia}
                techs={pj.techs}
                liveLink={pj.liveLink}
                githubLink={pj.githubLink}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectGrid;
