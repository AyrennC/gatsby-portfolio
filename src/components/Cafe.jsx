/** @jsx jsx */
import Decorations from './Decorations';
import Table from './Table';
import Terminal from './Terminal';
import Window from './Window';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const CafeContainer = styled.div`
  position: relative;
  min-height: 100vh;
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
