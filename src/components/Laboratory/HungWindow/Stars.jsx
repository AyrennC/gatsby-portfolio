/** @jsx jsx */
import StyledComponent from '../StyledComponent';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from 'ramda';
import { jsx } from 'theme-ui';

const twinkle = keyframes`
  50% {
    opacity: 0.3;
  }
`;

const StyledStars = styled(StyledComponent)`
  width: calc(100% - 40px);
  height: 35%;
  top: 10px;
  left: 20px;
`;

const DynamicStarStyle = ({ theme: { colors } }) => css`
  border-radius: 50%;
  background-color: ${colors.grey.white};
  animation: ${twinkle} 5s linear infinite;
  width: 3px;
  height: 3px;
  top: 10px;
  left: 12px;
  opacity: 0.8;

  &:nth-of-type(2) {
    top: 20px;
    left: 32px;
    width: 4px;
    height: 4px;
    animation-delay: 1s;
  }

  &:nth-of-type(3) {
    top: 40px;
    left: 6px;
    width: 5px;
    height: 5px;
    animation-delay: 2s;
  }

  &:nth-of-type(4) {
    top: 60px;
    left: 65px;
    width: 3px;
    height: 3px;
    animation-delay: 3s;
  }

  &:nth-of-type(5) {
    top: 52px;
    left: 42px;
    width: 3px;
    height: 3px;
    animation-delay: 4s;
  }
`;

const Star = styled(StyledComponent)`
  ${DynamicStarStyle}
`;

const Stars = (props) => (
  <StyledStars {...props}>
    {R.times(
      (key) => (
        <Star key={key} />
      ),
      5,
    )}
  </StyledStars>
);

export default Stars;
