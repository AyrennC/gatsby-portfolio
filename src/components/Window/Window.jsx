/** @jsx jsx */
import Rain from './Rain';
import Cityscape from '../../images/cityscape.png';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const WindowContainer = styled.div`
  background-image: url(${Cityscape});
  background-size: cover;
  margin-top: 3%;
  height: 45%;
  width: 80%;
  max-width: 1280px;
  position: absolute;
  border: 1.4vh #843031 solid;
  border-bottom: 1.8vh #b7564a solid;
  border-left: none;
  border-radius: 0 8px 8px 0;
  pointer-events: none;

  &::before {
    background: none;
    border-top: 0.6vh #461c12 solid;
    border-right: 0.7vh #461c12 solid;
    border-bottom: 0.8vh #824854 solid;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -1px;
    pointer-events: none;
  }

  &::after {
    background: none;
    border-bottom: 1vh #201925 solid;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -10px;
    right: -6px;
    border-radius: 10px;
    bottom: -2.6vh;
    z-index: -1;
    pointer-events: none;
  }
`;

const RainContainer = styled.div`
  width: calc(100% - 6px);
  margin-right: 6px;
  margin-top: 5px;
  position: relative;
  height: calc(100% - 12px);
  overflow: hidden;
`;

const Window = (props) => (
  <WindowContainer {...props}>
    <RainContainer>
      <Rain />
    </RainContainer>
  </WindowContainer>
);

export default Window;
