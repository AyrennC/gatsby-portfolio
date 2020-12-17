/** @jsx jsx */
import StyledComponent, { Container } from '../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import { jsx } from 'theme-ui';

const BroomStick = styled(StyledComponent)`
  right: 0;
  width: 150px;
  height: 14px;
  background: linear-gradient(to top, #992f21 50%, #720c0a 50%, #720c0a 100%);
  border-radius: 10px;
  top: 50px;

  &::before {
    width: 30px;
    height: 104%;
    background: linear-gradient(to top, #992f21 55%, #720c0a 55%, #720c0a 100%);
    border-radius: 10px;
    left: -18px;
    transform: rotate(15deg);
    bottom: 3px;
  }

  &::after {
    height: 100%;
    background: linear-gradient(to top, #992f21 50%, #720c0a 50%, #720c0a 100%);
    border-radius: 5px;
    left: -110px;
    bottom: 6px;
    width: 100px;
  }
`;

const DynamicBroomStickDynamicShadowStyle = ({ theme: { colors } }) => css`
  width: 40px;
  height: 100%;
  background-color: ${colors.primary.dark};
  right: 0;
  border-radius: 0 10px 10px 0;
  opacity: 0.3;
`;

const BroomStickShadow = styled(StyledComponent)`
  ${DynamicBroomStickDynamicShadowStyle}
`;

const BroomHair = styled(StyledComponent)`
  width: 100px;
  height: 100px;
  right: 250px;
  top: 34px;
`;

const BroomHairTop = styled(StyledComponent)`
  width: 35px;
  height: 35px;
  right: 0;
  perspective: 50px;

  &::after {
    width: 100%;
    height: 100%;
    background-color: #ee8228;
    border-radius: 7px;
    transform: rotateY(-35deg);
  }
`;

const BroomHairBottom = styled(StyledComponent)`
  width: 80px;
  height: 50px;
  right: 23px;
  top: -9px;
  transform-style: preserve-3d;
  perspective: 38px;

  &::after {
    width: 100%;
    height: 100%;
    background-color: #d16d1b;
    border-radius: 7px;
    transform-style: preserve-3d;
    transform: rotateY(35deg);
    z-index: -1;
  }
`;

const BroomHairReflection = styled(StyledComponent)`
  background-color: #ee8228;
  width: 120px;
  height: 35px;
  transform: rotate(-22deg);
  left: -42px;
  top: 14px;
  border-radius: 50% 50% 30% 20%;

  &::before {
    width: 50px;
    height: 30px;
    background-color: #ee8228;
    border-radius: 0 0 30px 12px;
    top: 6px;
    left: -9px;
    transform: rotate(15deg) skewX(-10deg);
  }

  &::after {
    width: 90px;
    height: 20px;
    top: 2px;
    border-radius: 50%;
    background-color: #ee8228;
  }
`;

const BroomHairBand = styled(StyledComponent)`
  width: 20px;
  height: 34px;
  background-color: #329399;
  right: 25px;
  border-radius: 3px;
  z-index: 3;
`;

const DynamicBroomHookStyle = ({ theme: { colors } }) => css`
  width: 14px;
  height: 30px;
  border-radius: 10px;
  background-color: ${colors.primary.dark};
  right: 40px;
  top: 40px;

  &::after {
    width: 100%;
    height: 20px;
    background-color: ${colors.primary.medium};
    border-radius: 14px;
    bottom: 0;
    opacity: 0.9;
  }

  &:nth-of-type(3) {
    right: 210px;
    top: 36px;
  }
`;

const BroomHook = styled(StyledComponent)`
  ${DynamicBroomHookStyle}
`;

const BroomLines = styled(StyledComponent)`
  height: 1px;
  width: 60px;
  background-color: #c54c17;
  z-index: 2;
  left: 5px;
  top: 7px;
  transform: rotate(15deg);

  &::before {
    width: 80%;
    height: 100%;
    background-color: #c54c17;
    top: 9px;
    left: 10px;
    transform: rotate(-15deg);
  }

  &::after {
    width: 100%;
    height: 100%;
    background-color: #c54c17;
    top: 18px;
    left: 5px;
    transform: rotate(-30deg);
  }
`;

const DynamicBroomDetailsStyle = ({ theme: { colors } }) => css`
  clip-path: polygon(0 55%, 0% 100%, 100% 42%);
  left: -50px;
  width: 30px;
  height: 20px;
  bottom: 53px;
  background-color: ${colors.shadow.dark};

  &:nth-of-type(7) {
    top: -15px;
    height: 30px;
    width: 20px;
    transform: rotate(25deg);
  }
`;

const BroomDetails = styled(StyledComponent)`
  ${DynamicBroomDetailsStyle}
`;

const DynamicShadowStyle = ({ shadow, theme: { colors } }) =>
  shadow &&
  css`
    background-color: transparent !important;
    transform: scale(1.1, 1.1) translate(-5px, 10px) rotate(-110deg);
    z-index: 1;

    *,
    *:after,
    *:before,
    * > * {
      background-color: ${colors.shadow.dark} !important;
      box-shadow: none !important;
    }

    ${BroomStick},
    ${BroomStick}::after,
  ${BroomStick}::before {
      background: ${colors.shadow.dark} !important;
    }

    ${BroomHair},
    ${BroomHairBottom} {
      background-color: transparent !important;
    }
  `;

const BroomContainer = styled(StyledComponent)`
  width: 400px;
  height: 80px;
  left: -120px;
  bottom: 170px;
  z-index: 2;
  transform: rotate(-110deg);

  ${DynamicShadowStyle};
`;

const StyledBroom = ({ shadow, ...props }) => (
  <BroomContainer shadow={shadow} {...props}>
    <BroomStick>{shadow || <BroomStickShadow />}</BroomStick>
    <BroomHook />
    <BroomHook />
    <BroomHair>
      <BroomHairTop />
      <BroomHairBottom />
      {shadow || (
        <React.Fragment>
          <BroomLines />
          <BroomHairReflection />
          <BroomHairBand />
          <BroomDetails />
          <BroomDetails />
        </React.Fragment>
      )}
    </BroomHair>
  </BroomContainer>
);

const Broom = (props) => (
  <Container {...props}>
    <StyledBroom shadow />
    <StyledBroom />
  </Container>
);

export default Broom;

StyledBroom.propTypes = {
  shadow: PropTypes.bool,
};

StyledBroom.defaultProps = {
  shadow: false,
};
