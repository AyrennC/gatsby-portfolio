/** @jsx jsx */
import Books from './Books';
import { BottleLeft, Drippings, BottleRight } from './Bottles';
import Candles from './Candles';
import Shelf, { ShelfBottom, ShelfMiddle, ShelfTop } from './Shelf';
import Skull from './Skull';
import { Container } from '../../StyledComponent';
import { jsx } from 'theme-ui';

const Shelves = (props) => (
  <Container {...props}>
    <ShelfTop>
      <Shelf shadow>
        <BottleLeft shadow />
        <Drippings />
        <BottleRight shadow />
      </Shelf>
      <Shelf>
        <BottleLeft />
        <Drippings />
        <BottleRight />
      </Shelf>
    </ShelfTop>

    <ShelfMiddle>
      <Shelf shadow>
        <Skull shadow />
        <Candles shadow />
      </Shelf>
      <Shelf>
        <Skull />
        <Candles />
      </Shelf>
    </ShelfMiddle>

    <ShelfBottom>
      <Shelf shadow>
        <Books shadow />
      </Shelf>
      <Shelf>
        <Books />
      </Shelf>
    </ShelfBottom>
  </Container>
);

export default Shelves;
