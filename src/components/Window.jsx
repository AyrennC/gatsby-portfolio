/** @jsx jsx */
import Cityscape from '../images/cityscape.jpg';
import styled from '@emotion/styled';

const Window = styled.div`
  background-image: url(${Cityscape});
  background-size: cover;
  margin-top: 6vh;
  height: 40vh;
  width: 80vw;
  position: absolute;
  border: 12px #b95144 solid;
  border-left: none;
`;

export default Window;
