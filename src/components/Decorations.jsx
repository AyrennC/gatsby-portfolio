/** @jsx jsx */
import NeonSign from './NeonSign';
import Portrait from './Portrait';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const DecorationsContainer = styled.div`
  margin: auto;
  max-width: 1024px;
  display: flex;
  justify-content: space-around;

  @media (orientation: portrait) {
    flex-direction: column;
    align-items: center;
  }
`;

const PortraitContainer = styled.div`
  @media (orientation: portrait) {
    position: absolute;
    right: 20px;
    top: 40px;
  }
`;

const Decorations = () => (
  <DecorationsContainer>
    <NeonSign sx={{ marginTop: 4 }} />
    <PortraitContainer>
      <Portrait sx={{ marginTop: 4, marginRight: 4 }} />
    </PortraitContainer>
  </DecorationsContainer>
);

export default Decorations;
