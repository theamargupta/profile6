import styled, { css } from 'styled-components';

export const List = styled.ul`
  position: absolute;
  bottom: 40px;
  right: 100px;
  display: flex;
  z-index: 100;
`;

export const Item = styled.li`
  list-style: none;
  margin: 5px;
  padding: 0 6px;
  background: #fff;
  transition: 0.5s;
  ${(props) =>
    css`
      transition-delay: calc(0.2s * ${props.index});
    `}
  ${(props) =>
    props.active &&
    css`
      opacity: 0;
      visibility: hidden;
      transform: translateY(100px);
    `}
  a {
    color: #111;
    text-decoration: none;
    display: inline-block;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
  }
`;
