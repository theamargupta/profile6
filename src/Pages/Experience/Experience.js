import React from 'react';
import './Experience.scss';
import Header from '../../Components/Header/Header';
import experienceData from './ExperienceData';

export default () => (
  <div className='experince-page'>
    <Header experience />
    <div class='container'>
      <div class='timeline'>
        <ul>
          {experienceData.map(
            ({ id, date, title, company, desc, duration, location, as }) => (
              <li key={id}>
                <div class='timeline-content'>
                  <h3 class='date'>{date}</h3>
                  <h1>
                    <span className='experinceValues'>{title}</span>
                    {' -'}
                    {as}
                  </h1>
                  <h3>
                    Company Name -{' '}
                    <span className='experinceValues'>{company}</span>
                  </h3>
                  <p>
                    Employment Duration -{' '}
                    <span className='experinceValues'>{duration}</span>
                  </p>
                  <p>
                    Location -{' '}
                    <span className='experinceValues'>{location}</span>
                  </p>
                  <p className='experinceValues'>{desc}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  </div>
);
