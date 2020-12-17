/** @jsx jsx */
import StyledComponent, { Container } from '../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { jsx } from 'theme-ui';

const Pumpkin = styled(StyledComponent)`
  bottom: 0;
  left: 20px;
  background: #c54c17;
  width: 100px;
  height: 80px;
  border-radius: 50px;
  z-index: 2;

  &::before {
    background-color: #ee8228;
    border-radius: 40px;
    width: 50%;
    height: 100%;
    left: 25%;
  }

  &::after {
    width: 50%;
    height: 100%;
    left: 0;
    background-color: rgba(160, 32, 3, 0.4);
    border-radius: 50px 0 0 50px;
  }

  &:nth-of-type(3) {
    left: 60%;
    transform: scale(0.7);
    transform-origin: bottom center;
  }

  &:nth-of-type(2) {
    left: 60px;
    transform: scale(0.5);
    transform-origin: bottom center;
  }
`;

const PumpkinTop = styled(StyledComponent)`
  width: 30px;
  height: 30px;
  border: 10px solid #329399;
  border-radius: 0 50px 0 0;
  border-bottom: 0;
  border-left: 0;
  z-index: -1;
  top: -20px;
  left: 25px;
`;

const DynamicShadowStyle = ({ theme: { colors } }) => css`
  background-color: transparent !important;
  transform: scale(1.05, 1.1) translateY(-5px);

  *,
  *:after,
  *:before,
  * > * {
    background-color: ${colors.shadow.dark} !important;
    box-shadow: none !important;
  }

  ${PumpkinTop} {
    background-color: transparent !important;
    border-color: ${colors.shadow.dark};
  }
`;

const PumpkinContainer = styled(StyledComponent)`
  bottom: 22px;
  left: 22px;
  height: 100px;
  width: 100%;

  ${({ shadow }) => shadow && DynamicShadowStyle};
`;

const StyledPumpkins = (props) => (
  <PumpkinContainer {...props}>
    <Pumpkin>
      <PumpkinTop />
    </Pumpkin>
    <Pumpkin>
      <PumpkinTop />
    </Pumpkin>
  </PumpkinContainer>
);

const Pumpkins = (props) => (
  <Container {...props}>
    <StyledPumpkins shadow />
    <StyledPumpkins />
  </Container>
);

export default Pumpkins;
