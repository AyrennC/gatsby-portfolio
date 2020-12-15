/** @jsx jsx */
import Macintosh from './Macintosh';
import Scanline from './Scanline';
import Screen from './Screen';
import { jsx } from 'theme-ui';

const Monitor = ({ children, ...props }) => (
  <Macintosh {...props}>
    <Screen>
      <Scanline />
      {children}
    </Screen>
  </Macintosh>
);

export default Monitor;

Monitor.propTypes = {
  ...Macintosh.propTypes,
};
