import React, { Fragment, useState } from 'react';
import './Homepage.scss';
import Profile from './profile.jpeg';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
//  import Thanos from "react-thanos";
//  import StarWars from "../../Components/StarWars/StarWars";

const Homepage = ({ history }) => {
  const [snapp] = useState(false);
  return (
    <Fragment>
      <div className='homepage'>
        <div className='content'>
          <Header homepage className='navheader' />
          {snapp ? (
            {
              /* <StarWars />  */
            }
          ) : (
            <div className='homepage-container'>
              <div>
                <img src={Profile} alt='profile' className='profileimage' />
              </div>
              <div className='text-box'>
                <p className='subtitle'>Hi, my name is</p>
                <h1 className='title'>Amar Gupta</h1>
                <span className='subtitle'>I'm a Full-Stack Web Developer</span>
              </div>
              <div className='buttons-container'>
                <div className='buttons'>
                  {/* <CustomButton onClick={() => history.push("/skills")}>
                    My Skills
                  </CustomButton> */}
                  <CustomButton onClick={() => history.push('/projects')}>
                    View My Work
                  </CustomButton>
                  {/* <CustomButton onClick={() => window.open(`https://amar-profile1.netlify.app/assets/resume/profile.pdf`, "_blank")}>
                    Resume
                  </CustomButton>
                  <CustomButton
                    onClick={() =>
                      window.open(`https://www.linkedin.com/in/amar-gupta-2684a1157/`, "_blank")
                    }
                  >
                    Linkedin
                  </CustomButton>
                  <CustomButton
                    onClick={() =>
                      window.open(`https://github.com/theamargupta`, "_blank")
                    }
                  >
                    Github
                  </CustomButton> */}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='footer'>
          {/* <Thanos
            className="thanos"
            onSnap={() => setSnapp(!snapp)}
            onSnapReverse={() => setSnapp(!snapp)}
          /> */}
          <div className='text'>
            <h1 className='made'>
              Made with
              <i className='fa fa-heart-o heart-off' aria-hidden='true'></i> by
              Amar Gupta
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
