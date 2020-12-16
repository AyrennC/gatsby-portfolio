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

export const Container = styled(StyledComponent)`
  width: 100%;
  height: 100%;
`;

export default StyledComponent;
