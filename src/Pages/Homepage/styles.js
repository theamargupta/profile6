import styled, { css } from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const GlassSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(15px);
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  transition-delay: 0.5s;
  ${(props) =>
    props.active &&
    css`
      width: 100%;
      backdrop-filter: blur(20px);
      box-shadow: 10px 0 15px rgba(0, 0, 0, 0.5);
      transition-delay: 0s;
    `}
`;
