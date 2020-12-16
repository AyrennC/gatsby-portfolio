/** @jsx jsx */
import Cat from './Cat';
import Moon from './Moon';
import Stars from './Stars';
import StyledComponent, { Container } from '../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { jsx } from 'theme-ui';

const Window = styled(StyledComponent)`
  width: 100%;
  height: 100%;
  border: 10px solid #310849;
  background-color: #3a0956;
  border-radius: 3px;

  &::after {
    top: 100%;
    width: 120%;
    height: 16px;
    background-color: #310849;
    left: -10%;
    border-radius: 3px;
  }
  &::before {
    width: 100%;
    height: 14px;
    background-color: #310849;
    top: 40%;
    z-index: 3;
    box-shadow: 0 -5px #8f65a9;
  }
`;

const Reflections = styled(StyledComponent)`
  background-color: #8f65a9;
  bottom: -16px;
  right: -18px;
  width: 50px;
  height: 16px;
  z-index: 2;
  border-radius: 3px;
  opacity: 0.4;

  &::before {
    background-color: #8f65a9;
    right: 0;
    width: 155px;
    height: 16px;
    z-index: 2;
    border-radius: 5px 3px 3px 3px;
    opacity: 0.3;
  }

  &:nth-of-type(2) {
    bottom: 0;
    right: -10px;
    width: 10px;
    height: 90px;
    border-radius: 50px 0 0 0;
    &::before {
      bottom: 0;
      right: 0;
      width: 100%;
      height: 220px;
      z-index: 2;
      border-radius: 5px 3px 3px 3px;
    }
  }

  &:nth-of-type(3) {
    background-color: #8f65a9;
    bottom: 124px;
    right: 0;
    width: 130px;
    height: 14px;
    z-index: 10;
    opacity: 0.1;
    border-radius: 50px 0 0 0;

    &::before,
    &::after {
      content: none;
    }
  }
`;

const WindowIn = styled(StyledComponent)`
  width: 100%;
  height: 100%;
  border: 6px solid #8f65a9;
  border-top: 0;
  overflow: hidden;
`;

const ShadowStyle = css`
  background-color: transparent !important;
  transform: scale(1.1, 1.1) translate(-8px, -5px);

  ${Window} {
    background-color: #410b61 !important;
    border-color: transparent !important;

    &::before {
      content: none !important;
    }

    &::after {
      background-color: #410b61 !important;
    }
  }
`;

const WindowContainer = styled(StyledComponent)`
  left: 50px;
  top: 200px;
  width: 200px;
  height: 250px;
  transform: scale(1.1);
  transform-origin: bottom center;
  z-index: 2;

  ${({ shadow }) => shadow && ShadowStyle};
`;

const HungWindow = (props) => (
  <Container {...props}>
    <WindowContainer shadow>
      <Window />
    </WindowContainer>
    <WindowContainer>
      <Window>
        <Reflections />
        <Reflections />
        <Reflections />
        <WindowIn>
          <Moon />
          <Stars />
        </WindowIn>
      </Window>
      <Cat highlight />
      <Cat />
    </WindowContainer>
  </Container>
);

export default HungWindow;
