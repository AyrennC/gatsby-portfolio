/** @jsx jsx */
import Shack from './Shack/Shack';
import theme from './Theme';
import Sunset from '../../images/sunset.png';
import Tome from '../Tome';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const LaboratoryContainer = styled.div`
  position: relative;
  min-height: 100vh;
  border-top: 32px #302521 solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url(${Sunset});
  background-size: cover;

  @media (orientation: portrait) {
    display: none;
  }

  @media screen and (max-height: 530px) and (orientation: landscape) {
    min-height: 100vw;
  }
`;

const Laboratory = () => (
  <ThemeProvider theme={theme}>
    <LaboratoryContainer>
      <Tome sx={{ margin: '10%' }} />
      <Shack />
    </LaboratoryContainer>
  </ThemeProvider>
);

export default Laboratory;
