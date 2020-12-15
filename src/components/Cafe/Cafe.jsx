/** @jsx jsx */
import Decorations from './Decorations';
import Table from './Table';
import Terminal from './Terminal';
import WindowComponent from './Window';
import WallTile from '../../images/wall-tile.png';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const CafeContainer = styled.div`
  background-image: url(${WallTile});
  position: relative;
  min-height: 100vh;

  @media screen and (max-height: 530px) and (orientation: landscape) {
    min-height: 100vw;
  }
`;

const Window = styled(WindowComponent)`
  @media (max-width: 1500px) and (min-aspect-ratio: 2 / 3) {
    width: 65%;
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
