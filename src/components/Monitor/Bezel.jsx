/** @jsx jsx */
import bezelImage from '../../images/bezel_gray.png';
import styled from '@emotion/styled';

const Bezel = styled.div`
  position: relative;
  width: 100%;
  height: 67.5vmin;
  border: 30px solid transparent;
  border-image-source: url(${bezelImage});
  border-image-slice: 30 fill;
  border-image-outset: 0;
  overflow: hidden;
`;

export default Bezel;
