/** @jsx jsx */
import Bubbles, { StyledBubbles } from './Bubbles';
import StyledComponent, { Container } from '../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { jsx } from 'theme-ui';

const DynamicShadowStyle = ({ shadow, theme: { colors } }) =>
  shadow &&
  css`
    z-index: 1;
    transform: scale(1.15, 1.15);
    background-color: ${colors.shadow.regular} !important;

    *,
    *:after,
    *:before,
    * > * {
      background-color: ${colors.shadow.regular} !important;
      box-shadow: none !important;
    }

    &::after,
    &::before {
      content: none !important;
    }

    ${StyledBubbles} {
      background-color: transparent !important;
    }
  `;

const DynamicCauldronStyle = ({ theme: { colors } }) => css`
  width: 180px;
  height: 180px;
  left: calc(50% - 90px);
  bottom: 14px;
  background-color: ${colors.primary.regular};
  border-radius: 50%;
  transform: scale(0.9);
  z-index: 3;

  &::after {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: -25px;
    left: 0;
    box-shadow: 0 25px ${colors.primary.extraDark};
  }

  ${DynamicShadowStyle};
`;

const StyledCauldron = styled(StyledComponent)`
  ${DynamicCauldronStyle}
`;

const DynamicCauldronTopStyle = ({ theme: { colors } }) => css`
  width: 90%;
  left: 5%;
  height: 10px;
  background-color: ${colors.primary.dark};
  top: 28px;
  border-radius: 10px;
  z-index: 4;

  &::before {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 -2px #f175eb;
    top: 2px;
  }

  &::after {
    background-color: ${colors.primary.extraDark};
    height: 100%;
    width: 90%;
    top: 100%;
    border-radius: 2px;
    left: 5%;
  }
`;

const CauldronTop = styled(StyledComponent)`
  ${DynamicCauldronTopStyle}
`;

const DynamicHandleStyle = ({ theme: { colors } }) => css`
  width: 80%;
  height: 40%;
  top: 21%;
  left: 10%;
  border-radius: 0 0 40px 40px;
  background-color: transparent;
  border: 8px solid ${colors.primary.extraDark};

  &::before,
  &::after {
    width: 60px;
    height: 14px;
    background-color: #ee8228;
    bottom: -10px;
    left: 35px;
    border-radius: 5px;
  }

  &::after {
    height: 7px;
    border-radius: 0 0 5px 5px;
    background-color: #c54c17;
  }
`;

const Handle = styled(StyledComponent)`
  ${DynamicHandleStyle}
`;

const Cauldron = (props) => (
  <Container {...props}>
    <StyledCauldron shadow>
      <Bubbles />
      <CauldronTop />
    </StyledCauldron>
    <StyledCauldron>
      <Handle />
      <Bubbles />
      <CauldronTop />
    </StyledCauldron>
  </Container>
);

export default Cauldron;
