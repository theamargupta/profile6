import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ item: { id, imageUrl, name } }) => {
  return (
    <div className="skillz">
      <div className="inner">
        <img src={imageUrl} alt="skillimage" className="image" />
        <h1 className="name">{name}</h1>
      </div>
    </div>
  );
};

export default SkillCard;
