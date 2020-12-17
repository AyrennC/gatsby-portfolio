/** @jsx jsx */
import Cat from './Cat';
import Moon from './Moon';
import Stars from './Stars';
import StyledComponent, { Container } from '../../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { jsx } from 'theme-ui';

const DynamicWindowStyle = ({ theme: { colors } }) => css`
  width: 100%;
  height: 100%;
  border: 10px solid ${colors.primary.extraDark};
  background-color: ${colors.primary.dark};
  border-radius: 3px;

  &::after {
    top: 100%;
    width: 120%;
    height: 16px;
    background-color: ${colors.primary.extraDark};
    left: -10%;
    border-radius: 3px;
  }
  &::before {
    width: 100%;
    height: 14px;
    background-color: ${colors.primary.extraDark};
    top: 40%;
    z-index: 3;
    box-shadow: 0 -5px ${colors.primary.light};
  }
`;

const Window = styled(StyledComponent)`
  ${DynamicWindowStyle}
`;

const DynamicReflectionsStyle = ({ theme: { colors } }) => css`
  background-color: ${colors.primary.light};
  bottom: -16px;
  right: -18px;
  width: 50px;
  height: 16px;
  z-index: 2;
  border-radius: 3px;
  opacity: 0.4;

  &::before {
    background-color: ${colors.primary.light};
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
    background-color: ${colors.primary.light};
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

const Reflections = styled(StyledComponent)`
  ${DynamicReflectionsStyle}
`;

const DynamicWindowInStyle = ({ theme: { colors } }) => css`
  width: 100%;
  height: 100%;
  border: 6px solid ${colors.primary.light};
  border-top: 0;
  overflow: hidden;
  background: linear-gradient(
    200deg,
    #21244d 0 45%,
    #323866 45% 70%,
    #3e4173 70% 90%,
    #604970 90%
  );
`;

const WindowIn = styled(StyledComponent)`
  ${DynamicWindowInStyle}
`;

const DynamicShadowStyle = ({ theme: { colors } }) => css`
  background-color: transparent !important;
  transform: scale(1.1, 1.1) translate(-8px, -5px);

  ${Window} {
    background-color: ${colors.shadow.dark} !important;
    border-color: transparent !important;

    &::before {
      content: none !important;
    }

    &::after {
      background-color: ${colors.shadow.dark} !important;
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

  ${({ shadow }) => shadow && DynamicShadowStyle};
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
