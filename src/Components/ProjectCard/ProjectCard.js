import React from "react";
import "./ProjectCard.scss";
import CustomButton from "../CustomButton/CustomButton";

const ProjectCard = ({
  project: { title, imageUrl, description, github, live }
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="projectname">{title}</div>
          <div className="portimage">
            <img src={imageUrl} alt="myimage" className="projectimage" />
          </div>
          <div className="description">
            <span className="desc">{description}</span>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="project-buttons">
            <div className="github">
              <CustomButton onClick={() => window.open(`${github}`, "_blank")}>
                View On Github
              </CustomButton>
            </div>
            <CustomButton onClick={() => window.open(`${live}`, "_blank")}>
              Live Site
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
