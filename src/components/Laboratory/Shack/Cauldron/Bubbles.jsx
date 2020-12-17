/** @jsx jsx */
import StyledComponent from '../../StyledComponent';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import * as R from 'ramda';
import { jsx } from 'theme-ui';

const bubble = keyframes`
  50% {
    transform: scale(1.2);
  }
`;

const bubbleGrow = keyframes`
  45%, 90% {
    transform: scale(1);
  }
  60%, 70% {
    transform: scale(1.15);
  }
`;

export const DynamicBubbleStyle = ({ theme: { colors } }) => css`
  bottom: -10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  left: 135px;
  background-color: ${colors.bubble.medium};
  animation: ${bubble} 3s linear infinite;

  &::after {
    width: 40%;
    height: 40%;
    right: 15%;
    top: 15%;
    border-radius: 50%;
    background-color: ${colors.bubble.light};
  }

  &::before {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    left: 10px;
    background-color: transparent;
    box-shadow: -10px 0 ${colors.bubble.dark};
  }

  &:nth-of-type(1) {
    animation-delay: 1s;
  }

  &:nth-of-type(2) {
    animation-delay: 1s;
  }

  &:nth-of-type(3) {
    animation-delay: 4s;
    bottom: -10px;
    left: 10px;
    width: 50px;
    height: 50px;
  }

  &:nth-of-type(4) {
    animation-delay: 3s;
    bottom: -10px;
    left: 40px;
    width: 40px;
    height: 40px;
  }

  &:nth-of-type(5) {
    animation-delay: 4s;
    bottom: -5px;
    left: 120px;
    width: 30px;
    height: 30px;
  }

  &:nth-of-type(6) {
    animation-delay: 1s;
    bottom: -10px;
    left: 15px;
    width: 30px;
    height: 30px;
  }

  &:nth-of-type(7) {
    animation-delay: 1s;
    bottom: -10px;
    left: 70px;
    width: 50px;
    height: 50px;
  }

  &:nth-of-type(8) {
    animation-delay: 2s;
    bottom: -15px;
    left: 100px;
    width: 40px;
    height: 40px;
  }
`;

export const StyledBubble = styled(StyledComponent)`
  ${DynamicBubbleStyle}
`;

export const StyledBubbles = styled(StyledComponent)`
  z-index: 1;
  width: 100%;
  height: 40px;
  top: -14px;
  animation: ${bubbleGrow} 15s linear infinite;
  transform-origin: bottom center;
`;

const Bubbles = (props) => (
  <StyledBubbles {...props}>
    {R.times(
      (key) => (
        <StyledBubble key={key} />
      ),
      8,
    )}
  </StyledBubbles>
);

export default Bubbles;
