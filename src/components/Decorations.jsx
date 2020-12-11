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
  position: relative;

  flex-direction: column;
  align-items: flex-start;
`;

const NeonSignContainer = styled.div`
  padding-left: 12vw;
  padding-top: 4vh;
  z-index: 10;
`;

const PortraitContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 40px;
`;

const Decorations = () => (
  <DecorationsContainer>
    <NeonSignContainer>
      <NeonSign sx={{ marginTop: 4 }} />
    </NeonSignContainer>
    <PortraitContainer>
      <Portrait sx={{ marginTop: 4, marginRight: 4 }} />
    </PortraitContainer>
  </DecorationsContainer>
);

export default Decorations;
