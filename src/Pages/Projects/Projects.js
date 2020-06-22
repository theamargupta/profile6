import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectData from "./ProjectData";
import ProjectData2 from "./ProjectData2";
import ProjectData3 from "./ProjectData3";
import "./Projects.scss";
import Header from "../../Components/Header/Header";

const Projects = () => {
  return (
    <div className="outer">
      <Header projects />
      <h1 className="prohead">Mern Stack</h1>
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
      {/* <h1 className="prohead">other</h1>
      <div className="projectcollection">
        {ProjectData2.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div> */}
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
