/** @jsx jsx */
import Bezel from './Bezel';
import Scanline from './Scanline';
import Screen from './Screen';
import { jsx } from 'theme-ui';

const Monitor = () => (
  <div
    sx={{
      padding: 4,
    }}
  >
    <Bezel>
      <Screen>
        <Scanline />
        <div>Hi, I am James.</div>
      </Screen>
    </Bezel>
  </div>
);

export default Monitor;
