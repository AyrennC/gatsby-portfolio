/** @jsx jsx */
import Books from './Books';
import { BottleLeft, Drippings, BottleRight } from './Bottles';
import Candles from './Candles';
import CandyBowl from './CandyBowl';
import CrystalBall from './CystalBall';
import Shelf, { ShelfBottom, ShelfMiddle, ShelfTop } from './Shelf';
import Skull from './Skull';
import { jsx } from 'theme-ui';

const Shelves = (props) => (
  <div {...props}>
    <ShelfTop>
      <Shelf shadow>
        <CrystalBall shadow />
        <BottleLeft shadow />
        <Drippings />
        <BottleRight shadow />
      </Shelf>
      <Shelf>
        <CrystalBall />
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
        <CandyBowl shadow />
      </Shelf>
      <Shelf>
        <Books />
        <CandyBowl />
      </Shelf>
    </ShelfBottom>
  </div>
);

export default Shelves;
