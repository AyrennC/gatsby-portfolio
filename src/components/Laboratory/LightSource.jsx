import StyledComponent from './StyledComponent';
import styled from '@emotion/styled';

const Light = styled(StyledComponent)`
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background-color: #8f65a9;
  background: radial-gradient(
    circle,
    #8f65a9 0%,
    #8f65a9 35%,
    #6f3990 35%,
    #6f3990 55%,
    #5f2384 55%,
    #5f2384 90%
  );
  z-index: -1;
  bottom: -250px;
  left: calc(50% - 400px);
`;

export default Light;
