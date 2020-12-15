/** @jsx jsx */
import Shelf from './Shelf';
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

const Laboratory = () => (
  <LaboratoryContainer>
    <Shelf />
  </LaboratoryContainer>
);

export default Laboratory;
