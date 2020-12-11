/** @jsx jsx */
import Cityscape from '../images/cityscape.jpg';
import styled from '@emotion/styled';

const Window = styled.div`
  background-image: url(${Cityscape});
  background-size: cover;
  height: calc(40vh);
  width: 80vw;
  position: absolute;
`;

export default Window;
