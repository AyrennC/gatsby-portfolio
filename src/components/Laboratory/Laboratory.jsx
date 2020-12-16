/** @jsx jsx */
import Broom from './Broom';
import Cauldron from './Cauldron';
import HungWindow from './HungWindow';
import Light from './LightSource';
import Pumpkins from './Pumpkins';
import Shelves from './Shelves';
import StyledComponent from './StyledComponent';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const LaboratoryContainer = styled.div`
  position: relative;
  min-height: 100vh;
  border-top: 32px #302521 solid;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-height: 530px) and (orientation: landscape) {
    min-height: 100vw;
  }
`;

const Room = styled(StyledComponent)`
  width: 820px;
  height: 620px;
  overflow: hidden;
`;

const Laboratory = () => (
  <LaboratoryContainer>
    <Room>
      <Shelves />
      <Light />
      <Cauldron />
      <HungWindow />
      <Pumpkins />
      <Broom />
    </Room>
  </LaboratoryContainer>
);

export default Laboratory;
