/** @jsx jsx */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const smoke = keyframes`
  0% {
    opacity: 0.1;
    top: 35px;
  }
  50% {opacity: 1;}
  100% {
    width: 30px;
    opacity: 0.1;
    box-shadow: 2px -5px 20px 15px rgba(220,220,220,0.7),
    inset 2px -5px 20px 5px rgba(220,220,220,0.7);
    top: -20px;
  }
`;

const Smoke = styled.div`
  position: absolute;
  bottom: 170px;
  left: 26px;
  z-index: 20;
  opacity: 0.6;

  div {
    position: absolute;
    left: 20px;
    border-radius: 50%;
    height: 30px;
    width: 6px;
    box-shadow: 2px -5px 20px 15px #fff, inset 2px -5px 20px 5px #fff;
    animation: ${smoke} 8s infinite;

    &:nth-child(2) {
      left: 0;
      animation: ${smoke} 8s infinite -3s;
    }

    &:nth-child(3) {
      left: 60px;
      animation: ${smoke} 8s infinite -1s;
    }
    &:nth-child(4) {
      left: 30px;
      animation: ${smoke} 8s infinite -4s;
    }
  }
`;

const CupContainer = styled.div`
  z-index: 10;
  height: 155px;
  width: 131px;
  position: absolute;
  bottom: 74px;
  left: 40px;
  background: #1d80c2;
  border-top-left-radius: 50% 34%;
  border-top-right-radius: 50% 34%;
  border-bottom-left-radius: 45% 67%;
  border-bottom-right-radius: 45% 67%;

  @media (max-aspect-ratio: 7 / 8) {
    transform: scale(1.2);
    bottom: 94px;
    left: 100px;
  }
`;

const CupShadow = styled.div`
  height: 56px;
  width: 100px;
  background: rgba(172, 91, 20, 0.2);
  border-bottom-left-radius: 56px;
  border-bottom-right-radius: 56px;
  position: absolute;
  bottom: 70px;
  left: 32px;

  @media (orientation: portrait) {
    transform: scale(1.2);
  }

  @media (max-aspect-ratio: 7 / 8) {
    bottom: 90px;
    left: 92px;
  }
`;

const Top = styled.div`
  height: 80px;
  width: 131px;
  background: #8f6739;
  border-radius: 50%;
  box-sizing: border-box;
  border: 12px solid #46a8eb;
  box-shadow: inset 0 50px 0 -20px #6b4b28;
  position: absolute;
`;

const Handle = styled.div`
  height: 66px;
  width: 60px;
  background: transparent;
  box-sizing: border-box;
  border: 16px solid #1d80c2;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 80% 60%;
  position: absolute;
  top: 60px;
  left: -31px;
`;

const Teatag = styled.div`
  height: 36px;
  width: 32px;
  position: absolute;
  top: 103px;
  left: -20px;
  background: #c1ebc3;
  box-shadow: inset 0 -6px 0 0 #45ac71;

  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    border-style: solid;
    border-width: 0 16px 8px 16px;
    border-color: transparent transparent #c1ebc3 transparent;
  }
`;

const TeabagCord = styled.div`
  height: 57px;
  width: 60px;
  position: absolute;
  top: 57px;
  left: -7px;
  box-sizing: border-box;
  border: 6px solid #fff5e6;
  border-top-left-radius: 29px;
  border-top-right-radius: 29px;
  clip: rect(0px 44px 41px 0px);
`;

const TeabagCordBeginningAndEnd = styled.div`
  position: absolute;
  top: 57px;
  left: -7px;

  &::before,
  &::after {
    content: '';
    background: #fff5e6;
    border-radius: 50%;
    position: absolute;
  }

  &::before {
    top: 3.1px;
    left: 40px;
    height: 7.1px;
    width: 6.6px;
    clip: rect(0px 6.6px 7px 3.8px);
  }
  &::after {
    top: 38px;
    left: 0;
    height: 6px;
    width: 6px;
  }
`;

const Cup = (props) => (
  <div {...props}>
    <CupShadow />
    <CupContainer>
      <Smoke>
        <div />
        <div />
        <div />
        <div />
      </Smoke>
      <Teatag />
      <Handle />
      <Top />
      <TeabagCord />
      <TeabagCordBeginningAndEnd />
    </CupContainer>
  </div>
);

export default Cup;
