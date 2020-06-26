import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectData from "./mern";
import ProjectData2 from "./react";
import ProjectData3 from "./static";
import FutureSection from "./future-pro";
import "./Projects.scss";
import Header from "../../Components/Header/Header";

const Projects = () => {
  return (
    <div className="outer">
      <Header projects />
      <h1 className="prohead">Node.JS</h1>
      <div className="projectcollection">
        {ProjectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h1 className="prohead">React</h1>
      <div className="projectcollection">
        {ProjectData2.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h1 className="prohead">Future Projects</h1>
      <div className="projectcollection">
        {FutureSection.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h1 className="prohead">Static</h1>
      <div className="projectcollection">
        {ProjectData3.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
