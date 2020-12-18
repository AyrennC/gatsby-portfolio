/** @jsx jsx */
import Broom from './Broom';
import Cauldron from './Cauldron';
import HungWindow from './HungWindow';
import Light from './LightSource';
import Shelves from './Shelves';
import Forest from '../../../images/forest.png';
import StyledComponent from '../StyledComponent';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const twinkle = keyframes`
  50% {
    opacity: 0.8;
  }
`;

const DynamicShackStyle = ({ theme: { colors } }) => css`
  width: 960px;
  height: 828px;
  border-radius: 50% 50% 0 0;
  background-image: url(${Forest});
  background-size: cover;
  background-position: center center;
  border: 4px #ffffff solid;
  border-bottom: none;
  bottom: 0;
  position: relative;
  display: block;

  @media (max-width: 1024px) {
    width: 828px;
  }

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 0 60px ${colors.grey.white}, 0 0 20px ${colors.grey.white},
      0 0 6px ${colors.grey.white}, 0 0 5px ${colors.primary.light},
      0 0 1px ${colors.primary.light}, 0 0 80px ${colors.primary.light},
      0 0 1px ${colors.primary.light}, 0 0 1px ${colors.primary.light};
    animation: ${twinkle} 1s infinite forwards ease-in-out;
  }
`;

const StyledShack = styled(StyledComponent)`
  ${DynamicShackStyle}
`;

const Interior = styled(StyledComponent)`
  width: 90%;
  height: 80%;
  overflow: hidden;
  z-index: 1;
  bottom: 0;
  margin: 0 5%;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
`;

const Shack = (props) => (
  <StyledShack {...props}>
    <Interior>
      <Shelves />
      <Light />
      <Cauldron />
      <HungWindow />
      <Broom />
    </Interior>
  </StyledShack>
);

export default Shack;
