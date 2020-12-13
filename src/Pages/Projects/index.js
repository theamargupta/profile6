import React, { useState } from 'react';
import mountainBackground from '../Homepage/Stock-Mac-Wallpaper.jpg';
//  Style Components
import { BackgroundImg, Section, GlassSlider } from '../Homepage/styles';
// Components
import Header from '../../Components/Header';
import Navigation from '../../Components/Navigation';

const Projects = () => {
  const [active, setActive] = useState(false);
  return (
    <Section>
      <Header active={active} setActive={setActive} />
      {active && <GlassSlider active={active} />}
      <BackgroundImg src={mountainBackground} alt='MountainBackground' />
      <Navigation active={active} />
    </Section>
  );
};

export default Projects;
