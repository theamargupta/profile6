import React from 'react';
import image from './pexels-photo-2049422.jpeg';
const Homepage = () => {
  return (
    <div>
      <section>
        <header>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href='#' className='logo'>
            water.
          </a>
          <div className='toggle'></div>
        </header>
        <img src={image} alt='' />
      </section>
    </div>
  );
};

export default Homepage;
