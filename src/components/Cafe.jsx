/** @jsx jsx */
import Decorations from './Decorations';
import Table from './Table/Table';
import Terminal from './Terminal';
import Window from './Window/Window';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const CafeContainer = styled.div`
  position: relative;
  min-height: 100vh;

  @media screen and (max-height: 530px) and (orientation: landscape) {
    min-height: 100vw;
  }
`;

const Cafe = () => (
  <CafeContainer>
    <Window />
    <Decorations />
    <Table>
      <Terminal />
    </Table>
  </CafeContainer>
);

export default Cafe;
