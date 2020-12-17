import StyledComponent from '../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';

const DynamicLightStyle = ({ opacity = 0.2, theme: { colors } }) => css`
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background-color: ${colors.primary.light};
  background: radial-gradient(
    circle,
    ${transparentize(0, colors.primary.light)} 0%,
    ${transparentize(opacity * 0.6, colors.primary.light)} 35%,
    ${transparentize(opacity * 0.6, colors.primary.medium)} 35%,
    ${transparentize(opacity * 0.8, colors.primary.medium)} 55%,
    ${transparentize(opacity * 0.8, colors.primary.mediumDark)} 55%,
    ${transparentize(opacity, colors.primary.mediumDark)} 90%
  );
  z-index: -1;
  bottom: -250px;
  left: calc(50% - 400px);
`;

const Light = styled(StyledComponent)`
  ${DynamicLightStyle}
`;

export default Light;
