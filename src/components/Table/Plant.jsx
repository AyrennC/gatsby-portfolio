/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const PlantContainer = styled.div`
  width: 260px;
  height: 230px;
  position: absolute;
  z-index: 10;

  &::before {
    right: 22px;
    transform: rotateZ(35deg);
  }

  &::after {
    left: 22px;
    transform: rotateZ(-35deg);
  }
`;

const Glass = styled.div`
  border-top: 51px solid rgba(255, 255, 255, 0.5);
  border-left: 27px solid transparent;
  border-right: 27px solid transparent;
  height: 0;
  bottom: 2px;
  width: 80%;
  left: 10%;
  position: absolute;
`;

const Shine = styled.div`
  background: rgba(255, 255, 255, 0.4);
  height: 51px;
  width: 20px;
  display: block;
  left: 0;
  bottom: 0;
  position: absolute;
  transform: skew(28deg);

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: inherit;
    background: inherit;
    height: inherit;
    width: 8px;
    left: 26px;
  }
`;

const Soil = styled.div`
  clip-path: polygon(0 0, 100% 0, 88% 100%, 12% 100%);
  background: repeating-linear-gradient(
    #efa63c,
    #efa63c 50%,
    #ba6d20 50%,
    #ba6d20 100%
  );
  width: 190px;
  height: 44px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -1px;
`;

const PlantRight = styled.div`
  width: 46px;
  height: 96px;
  position: absolute;
  bottom: 42px;
  right: 56px;

  div {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    bottom: 0;
  }
  div:nth-of-type(1) {
    height: 100%;
    width: 24px;
    background: repeating-linear-gradient(
      #abaf25,
      #abaf25 20%,
      #f7f8e5 20%,
      #f7f8e5 23%
    );
    left: 12px;
  }

  div:nth-of-type(2) {
    height: 62px;
    width: 24px;
    background: repeating-linear-gradient(
      #d1de00,
      #d1de00 20%,
      #f7f8e5 20%,
      #f7f8e5 24%
    );
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  div:nth-of-type(3) {
    height: 50px;
    width: 16px;
    background: repeating-linear-gradient(
      #bec60a,
      #bec60a 20%,
      #f7f8e5 20%,
      #f7f8e5 24%
    );
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
    right: 0;
  }
`;

const PlantLeft = styled.div`
  border-radius: 60% 60% 60% 60% / 90% 90% 30% 30%;
  background: #d1de00;
  width: 22px;
  height: 48px;
  position: absolute;
  bottom: 40px;
  left: 90px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background: inherit;
    height: inherit;
    width: inherit;
    border-radius: inherit;
    transform-origin: bottom center;
    bottom: 8px;
    z-index: -3;
  }

  &::before {
    transform: rotate(78deg);
    right: -2px;
  }

  &::after {
    transform: rotate(-78deg);
    left: -2px;
  }
`;

const LeafMiddle = styled.div`
  border-radius: 60% 60% 60% 60% / 90% 90% 30% 30%;
  background: #abaf25;
  width: 18px;
  height: 44px;
  -webkit-transform-origin: bottom center;
  transform-origin: bottom center;
  -webkit-transform: rotate(-56deg);
  transform: rotate(-56deg);
  bottom: 5px;
  left: 2px;
  position: absolute;
  z-index: -2;

  &::before {
    content: '';
    display: block;
    position: absolute;
    transform: rotate(112deg);
    border-radius: inherit;
    background: inherit;
    width: inherit;
    height: inherit;
    -webkit-transform-origin: inherit;
    transform-origin: inherit;
  }
`;

const LeafTop = styled.div`
  border-radius: 60% 60% 60% 60% / 90% 90% 30% 30%;
  background: #bec60a;
  width: 16px;
  height: 44px;
  transform-origin: bottom center;
  transform: rotate(-30deg);
  bottom: 2px;
  left: 4px;
  position: absolute;
  z-index: -1;

  &::before {
    content: '';
    display: block;
    position: absolute;
    transform: rotate(60deg);
    border-radius: inherit;
    background: inherit;
    width: inherit;
    height: inherit;
    transform-origin: inherit;
  }
`;

const PlantRear = styled.div`
  width: 4px;
  border-radius: 6px;
  background: #878561;
  position: absolute;
  height: 90px;
  left: 144px;
  bottom: 40px;
  z-index: -4;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 7px;
    height: 16px;
    background: #878561;
    border-radius: 50% 50% 50% 50% / 70% 70% 30% 30%;
  }

  &::before {
    right: 5px;
    top: 12px;
    transform: rotate(-50deg);
    box-shadow: 0 0 0 2px #878561, -26px 16px 0 5px #878561;
  }

  &::after {
    left: 5px;
    transform: rotate(50deg);
    box-shadow: 22px 14px 0 3px #878561, 50px 32px 0 7px #878561;
  }
`;

const Plant = (props) => (
  <PlantContainer {...props}>
    <PlantLeft>
      <LeafMiddle />
      <LeafTop />
    </PlantLeft>
    <PlantRear />
    <PlantRight>
      <div />
      <div />
      <div />
    </PlantRight>
    <Soil />
    <Glass>
      <Shine />
    </Glass>
  </PlantContainer>
);

export default Plant;
