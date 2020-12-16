import styled from '@emotion/styled/macro';

const StyledComponent = styled.div`
  position: absolute;
  box-sizing: border-box;

  *,
  *::before,
  *::after,
  &::before,
  &::after {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after,
  &::before,
  &::after {
    content: '';
    position: absolute;
  }
`;

export default StyledComponent;
