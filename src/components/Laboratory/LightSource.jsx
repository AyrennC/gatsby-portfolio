import StyledComponent from './StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const DynamicLightStyle = ({ theme: { colors } }) => css`
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background-color: ${colors.primary.light};
  background: radial-gradient(
    circle,
    ${colors.primary.light} 0%,
    ${colors.primary.light} 35%,
    ${colors.primary.medium} 35%,
    ${colors.primary.medium} 55%,
    ${colors.primary.mediumDark} 55%,
    ${colors.primary.mediumDark} 90%
  );
  z-index: -1;
  bottom: -250px;
  left: calc(50% - 400px);
`;

const Light = styled(StyledComponent)`
  ${DynamicLightStyle}
`;

export default Light;
