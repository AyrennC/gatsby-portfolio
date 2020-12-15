/** @jsx jsx */
import NeonSign from './NeonSign';
import PicturesComponent from './Pictures';
import Portrait from './Portrait';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const DecorationsContainer = styled.div`
  margin: auto;
  max-width: 1024px;
  display: flex;
  justify-content: space-around;
  position: relative;

  flex-direction: column;
  align-items: flex-start;
`;

const NeonSignContainer = styled.div`
  position: absolute;
  z-index: 10;
  left: 5%;
  top: 8%;
`;

const PortraitContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 40px;

  @media (orientation: landscape) {
    @media (min-height: 900px) {
      transform: scale(1.1);
    }

    @media (min-height: 1200px) {
      transform: scale(1.4);
    }

    @media (min-height: 1440px) {
      top: 60px;
      transform: scale(1.6);
    }

    @media (min-height: 1600px) {
      top: 80px;
      transform: scale(1.8);
    }
  }
`;

const Pictures = styled(PicturesComponent)`
  position: absolute;
  top: 2%;
  right: 1%;
  z-index: -1;

  @media (max-width: 1300px) {
    display: none;
  }
`;

const Decorations = () => (
  <div sx={{ width: '100%', height: '100%' }}>
    <NeonSignContainer>
      <NeonSign />
    </NeonSignContainer>
    <DecorationsContainer>
      <PortraitContainer>
        <Portrait sx={{ marginTop: 4, marginRight: 4 }} />
      </PortraitContainer>
    </DecorationsContainer>
    <Pictures />
  </div>
);

export default Decorations;
