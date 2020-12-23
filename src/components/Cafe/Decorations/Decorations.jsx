/** @jsx jsx */
import NeonSign from './NeonSign';
import Portrait from './Portrait';
import PostersComponent from './Posters';
import { Resume } from '../../../data';
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

    @media (max-width: 1500px) and (min-aspect-ratio: 2 / 3) {
      transform: scale(0.8);
      top: -50px;
      right: 10%;
    }
  }
`;

const Posters = styled(PostersComponent)`
  position: absolute;
  top: 5%;
  right: 2%;
  max-width: 20%;
  padding-left: 30px;

  @media (min-width: 1680px) {
    max-width: none;
  }

  @media (max-width: 1620px) {
    transform: scale(0.8);
  }

  @media (max-width: 1500px) and (min-aspect-ratio: 2 / 3) {
    max-width: 30%;
    top: 8%;
  }

  @media (orientation: portrait) {
    display: none;
  }
`;

const Decorations = () => (
  <div sx={{ width: '100%', height: '100%' }}>
    <NeonSignContainer>
      <NeonSign />
    </NeonSignContainer>
    <Posters
      hrefs={{ experience: Resume, projects: Resume, education: Resume }}
    />
    <DecorationsContainer>
      <PortraitContainer>
        <Portrait sx={{ marginTop: 4, marginRight: 4 }} />
      </PortraitContainer>
    </DecorationsContainer>
  </div>
);

export default Decorations;
