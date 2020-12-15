/** @jsx jsx */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const hourHandAnim = keyframes`
  100% {
    transform: translate(-50%,-100%) rotate(405deg);
  }
`;

const minuteHandAnim = keyframes`
  100% {
    transform: translate(-50%,-100%) rotate(520deg);
  }
`;

const secondHandAnim = keyframes`
  100% {
    transform: translate(-50%,-100%) rotate(320deg);
  }
`;

const Shelf = styled.div`
  width: 520px;
  height: 20px;
  background-color: #b7564a;
  border-bottom: 12px #54312d solid;
  border-bottom-right-radius: 12px;
  position: absolute;
  top: 20%;

  &::after {
    background: none;
    border-bottom: 7px #201925 solid;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -20px;
    right: 3px;
    border-radius: 10px;
    bottom: -17px;
    z-index: -2;
    pointer-events: none;
  }
`;

const Clock = styled.div`
  width: 128px;
  height: 128px;
  border: 10px solid #c15042;
  position: absolute;
  border-radius: 50%;
  left: 30px;
  top: -135px;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    background-color: #e9e6c9;
    top: 5px;
    left: 5px;
    width: calc(100% - 7px);
    height: calc(100% - 7px);
    border-radius: 50%;
    z-index: -1;
  }

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    background: linear-gradient(135deg, #75372f 30%, #e9e6c9 70%);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    z-index: -2;
  }
`;

const Knot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #9d374f;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

const Hand = styled.div`
  width: 4px;
  height: 50px;
  background-color: #47321a;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -100%);
  transform-origin: bottom;
`;

const HourHand = styled(Hand)`
  height: 30px;
  transform: translate(-50%, -100%) rotate(45deg);
  animation: 144s ${hourHandAnim} linear infinite;
`;

const MinuteHand = styled(Hand)`
  height: 40px;
  width: 3px;
  transform: translate(-50%, -100%) rotate(160deg);
  animation: 24s ${minuteHandAnim} linear infinite;
`;

const SecondHand = styled(Hand)`
  height: 47px;
  width: 2px;
  transform: translate(-50%, -100%) rotate(-40deg);
  animation: 4s ${secondHandAnim} linear infinite;
`;

const ClockFoot = styled.div`
  height: 50px;
  width: 12px;
  background-color: #47321a;
  position: absolute;
  bottom: -25px;
  z-index: -10;
`;

const ClockFootLeft = styled(ClockFoot)`
  transform: rotate(30deg);
  left: 20px;
`;

const ClockFootRight = styled(ClockFoot)`
  transform: rotate(-30deg);
  right: 20px;
`;

const Book = styled.div`
  width: 40px;
  position: absolute;

  &::before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 20px;
    background-color: #e9e6c9;
    top: 20px;
    left: 0;
  }

  &::after {
    content: ' ';
    width: 50%;
    height: 100%;
    background-color: black;
    opacity: 0.15;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const BookLeft = styled(Book)`
  height: 170px;
  left: 210px;
  top: -170px;
  background-color: #9d374f;
`;

const BookMiddle = styled(Book)`
  height: 195px;
  top: -195px;
  left: 250px;
  background-color: #e86830;
`;

const BookRight = styled(Book)`
  left: 290px;
  background-color: #5aa668;
  height: 180px;
  top: -180px;
`;

const Cactus = styled.div`
  width: 100px;
  height: 180px;
  position: absolute;
  left: 380px;
  top: -180px;
`;

const Pot = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
`;

const PotBottom = styled.div`
  width: 100%;
  height: 70%;
  background-color: #b35b34;
  position: absolute;
  bottom: 0;
`;

const PotTop = styled.div`
  width: 140%;
  height: 30%;
  background-color: #a0451e;
  position: absolute;
  top: 0;
  left: -20%;
`;

const Plant = styled.div`
  width: 45%;
  position: absolute;
  bottom: 50%;
  border-radius: 50px 50px 0 0;
`;

const PlantLeft = styled(Plant)`
  height: 35%;
  left: 5%;
  background-color: #87bb58;
`;

const PlantRight = styled(Plant)`
  height: 50%;
  right: 5%;
  background-color: #479856;
`;

const Tray = () => (
  <Shelf>
    <Clock>
      <Knot />
      <HourHand />
      <MinuteHand />
      <SecondHand />
      <ClockFootLeft />
      <ClockFootRight />
    </Clock>
    <BookLeft />
    <BookMiddle />
    <BookRight />
    <Cactus>
      <Pot>
        <PotTop />
        <PotBottom />
      </Pot>
      <PlantLeft />
      <PlantRight />
    </Cactus>
  </Shelf>
);

export default Tray;
