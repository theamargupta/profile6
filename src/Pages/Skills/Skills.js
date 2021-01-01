import React from 'react';
import './Skills.scss';
import SkillData from './SkillData';
import SkillCard from '../../Components/SkillCard/SkillCard';
import Header from '../../Components/Header/Header';

const Skills = () => {
  return (
    <div className='skill-page'>
      <Header skills />
      <div className='grid'>
        <div className='container'>
          {SkillData.map((item, key) => (
            <SkillCard key={key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
