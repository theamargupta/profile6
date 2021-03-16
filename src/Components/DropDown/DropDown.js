import React from 'react';
import './DropDown.scss';
import { Link } from 'react-router-dom';
import Pdf from './amar-resume.pdf';
import { toggleHideDropdown } from '../../Redux/Drop/drop-actions';

import { connect } from 'react-redux';

const DropDown = ({ toggleHideDropdown }) => {
  return (
    <div className='overlay'>
      <div className='exit'>
        <ul>
          <li className='exitmenu' onClick={toggleHideDropdown}>
            <i className='fa fa-times fa-2x' aria-hidden='true'></i>
          </li>
        </ul>
      </div>
      <div className='overlay-content' onClick={toggleHideDropdown}>
        <Link to='/'>Home</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/projects'>Portfolio</Link>
        <Link to='/experience'>Experience</Link>
        {/* <div className='option' onClick={() => window.open(Pdf, '_blank')}>
          Resume
        </div> */}
        <a
          className='option'
          onClick={() => window.open(Pdf, '_blank')}
          href={Pdf}
          download='amar-resume'
        >
          Resume
        </a>
        <div
          className='option'
          onClick={() =>
            window.open(
              `https://www.linkedin.com/in/amar-gupta-2684a1157/`,
              '_blank'
            )
          }
        >
          Linkedin
        </div>
        <div
          className='option'
          onClick={() =>
            window.open(`https://github.com/theamargupta`, '_blank')
          }
        >
          Github
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleHideDropdown: () => dispatch(toggleHideDropdown()),
});

export default connect(null, mapDispatchToProps)(DropDown);
