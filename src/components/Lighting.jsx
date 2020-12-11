import styled from '@emotion/styled';

const Lighting = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #362c3c;
  opacity: 0.1;
  z-index: 9;
  pointer-events: none;

  &::after {
    content: ' ';
    display: block;
    width: 120%;
    height: 80%;
    bottom: 0;
    background-color: #f6d4b8;
    opacity: 0.6;
    transform: rotate(20deg);
    transform-origin: 55% 0;
    right: 20%;
    top: 33%;
    z-index: 10;
    pointer-events: none;
  }
`;

export default Lighting;
