import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Fragment } from "react";

function ProjectGrid({ projects }) {
  return (
    <div>
      {projects &&
        projects.length > 0 &&
        projects.map((pj, index) => (
          <Fragment key={index}>
            <ProjectCard
              title={pj.title}
              introText={pj.introText}
              // liveLink
              // githubLink,
              techs={pj.techs}
              // isNew
              // projectMedia
              // customClasses,
              // customStyles,
              // href,
            />
          </Fragment>
        ))}
    </div>
  );
}

export default ProjectGrid;
