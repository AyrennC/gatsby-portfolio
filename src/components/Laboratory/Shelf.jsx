/** @jsx jsx */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { jsx } from 'theme-ui';

const drip = keyframes`
  20%, 100% {
    transform: translateY(60px);
  }
`;

const eyes = keyframes`
  50% {
    transform: scale(0.5);
    opacity: 0.5;
  }
`;

const flame = keyframes`
  50% {
    transform: scale(0.9) rotate(45deg);
  }
`;

const flicker = keyframes`
  21%, 24% {
    transform: rotate(0deg);
  }
  22%, 23% {
    transform: rotate(40deg);
  }
`;

const Div = styled.div`
  position: absolute;
  box-sizing: border-box;

  *,
  *::before,
  *::after,
  &::before,
  &::after {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after,
  &::before,
  &::after {
    content: '';
    position: absolute;
  }
`;

const ShelfBracket = styled(Div)`
  width: 220px;
  height: 20px;
  top: 0;
  right: 0;
  z-index: 2;

  .base {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background-color: #3a0956;
  }

  .shelf-hooks {
    background-color: #1c0526;
    background: linear-gradient(
      to right,
      #3a0956 0%,
      #3a0956 50%,
      #1c0526 50%,
      #1c0526 100%
    );
    right: 15px;
    height: 20px;
    width: 14px;
    z-index: -1;
    top: 100%;
    border-radius: 0 0 5px 5px;
  }

  .shelf-hooks:after {
    width: 100%;
    height: 100%;
    right: 176px;
    background: linear-gradient(
      to right,
      #500d78 0%,
      #500d78 50%,
      #1c0526 50%,
      #1c0526 100%
    );
    border-radius: 0 0 5px 5px;
  }
`;

const ShelfBase = styled(Div)`
  width: 220px;
  height: 20px;
  top: 220px;
  right: 50px;
  z-index: 3;
`;

const ShelfTop = styled(ShelfBase)`
  ${ShelfBracket} {
    &::after {
      width: 30%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 50px 0 0;
      bottom: 0;
      opacity: 0.1;
      z-index: 3;
    }
    &::before {
      width: 90%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 100px 0 0;
      bottom: 0;
      opacity: 0.1;
      z-index: 2;
    }
  }
`;

const ShelfMiddle = styled(ShelfBase)`
  top: 340px;

  ${ShelfBracket} {
    &::after {
      width: 15%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 100% 0 0;
      bottom: 0;
      opacity: 0.4;
      z-index: 3;
    }
    &::before {
      width: 70%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 40px 0 0;
      bottom: 0;
      z-index: 2;
      opacity: 0.2;
    }
  }
`;

const ShelfBottom = styled(ShelfBase)`
  top: 460px;
  ${ShelfBracket} {
    &::after {
      width: 27%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 5px 0 0;
      bottom: 0;
      opacity: 0.4;
      z-index: 3;
    }

    &::before {
      width: 80%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 5px 0 0;
      bottom: 0;
      opacity: 0.2;
      z-index: 2;
    }
  }
`;

const Bottle = styled(Div)`
  transform-origin: bottom center;

  .bowl {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #e6eff2;
    overflow: hidden;
  }

  .bowl:after {
    background-color: #a8dcea;
  }

  .bowl-in {
    width: 88%;
    height: 88%;
    left: 6%;
    bottom: 6%;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
  }

  .liquid {
    width: 100%;
    height: 70%;
    bottom: 0;
    background-color: #500d78;
  }

  .liquid:after {
    background-color: #3a0956;
  }

  .liquid .bottle-bubble {
    border-radius: 20px;
    width: 5px;
    height: 5px;
    top: 14px;
    left: 2px;
    background-color: #6c11a1;
    z-index: 2;
  }

  .liquid .bottle-bubble:nth-child(2) {
    top: 3px;
    left: 10px;
    width: 7px;
    height: 7px;
  }

  .liquid .bottle-bubble:nth-child(3) {
    top: 6px;
    left: 25px;
    width: 5px;
    height: 5px;
  }

  .liquid .bottle-bubble:nth-child(4) {
    top: 17px;
    left: 30px;
    width: 5px;
    height: 5px;
  }

  .liquid .bottle-bubble:nth-child(5) {
    top: -4px;
    left: 30px;
    width: 8px;
    height: 8px;
    background-color: #3a0956;
  }

  .bottle-reflection {
    opacity: 0.5;
    border-radius: 0 0 0 50px;
    border: 6px solid #feffff;
    border-top: 0;
    border-right: 0;
    width: 18px;
    height: 18px;
    bottom: 5px;
    left: 5px;
    z-index: 10;

    &::after {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #feffff;
      bottom: 10px;
      left: -6px;
      box-shadow: 15px 16px #feffff;
    }
  }
`;

const BottleLeft = styled(Bottle)`
  bottom: 20px;
  left: 35%;
  width: 50px;
  height: 50px;
  transform: scale(0.8);

  *::after {
    width: 50%;
    height: 100%;
    right: 0;
  }

  .bottle-neck {
    width: 12px;
    height: 20px;
    top: -16px;
    left: 19px;
    background-color: #e6eff2;

    &::after {
      background-color: #a8dcea;
    }

    &::before {
      background-color: #feffff;
      height: 80%;
      width: 30%;
      left: 12%;
      border-radius: 3px;
      z-index: 2;
      opacity: 0.5;
    }
  }

  .bottle-top {
    width: 24px;
    height: 7px;
    top: -23px;
    left: 13px;
    border-radius: 5px;
    background-color: #e6eff2;

    &::after {
      background-color: #a8dcea;
      border-radius: 0 5px 5px 0;
    }
  }
`;

const CrystalBall = styled(Div)`
  left: 10px;
  bottom: 20px;
  width: 60px;
  height: 60px;

  .stand {
    z-index: 2;
    width: 50px;
    left: 5px;
    height: 10px;
    border-radius: 3px;
    background-color: #e6eff2;
    background: linear-gradient(
      to right,
      #e6eff2 0%,
      #e6eff2 50%,
      #a8dcea 50%,
      #a8dcea 100%
    );
    bottom: 0;

    &::after {
      width: 40px;
      left: 5px;
      height: 7px;
      border-radius: 2px;
      bottom: 9px;
      background: linear-gradient(
        to right,
        #a8dcea 0%,
        #a8dcea 50%,
        #92bfcc 50%,
        #92bfcc 100%
      );
    }
  }

  .ball {
    border-radius: 50%;
    width: 56px;
    height: 56px;
    left: 2px;
    top: -6px;
    background-color: #f495f0;
    overflow: hidden;

    &::after {
      width: 50%;
      height: 100%;
      right: 0;
      background-color: #f175eb;
    }

    .ball-highlight {
      opacity: 0.5;
      border-radius: 0 0 0 50px;
      border: 6px solid #feffff;
      border-top: 0;
      border-right: 0;
      width: 18px;
      height: 18px;
      bottom: 10px;
      left: 7px;
      z-index: 10;

      &::after {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #feffff;
        bottom: 10px;
        left: -6px;
        box-shadow: 15px 16px #feffff;
      }
    }
  }
`;

const Drippings = styled(Div)`
  width: 30px;
  height: 12px;
  background-color: #3ebcbc;
  left: 58%;
  border-radius: 3px;
  top: -1px;
  z-index: 15;

  &::after {
    width: 8px;
    height: 18px;
    border-radius: 3px;
    background-color: #3ebcbc;
    top: 8px;
    right: 0;
  }

  .drip {
    width: 8px;
    height: 12px;
    border-radius: 3px;
    background-color: #3ebcbc;
    top: 10px;
    right: 0;
    animation: ${drip} 5s ease-in infinite;
  }
`;

const BottleRight = styled(Bottle)`
  transform-origin: bottom right;
  bottom: 70px;
  left: 73%;
  width: 50px;
  height: 50px;
  transform: rotate(-90deg);

  *:after {
    width: 50%;
    height: 100%;
    right: 0;
  }
  .bowl {
    width: 80%;
    height: 80%;
    left: 0;
    border-radius: 5px;
    background-color: #e6eff2;
    overflow: hidden;

    &::after {
      background-color: #a8dcea;
      width: 20%;
    }
    &::before {
      z-index: 3;
      width: 20px;
      height: 8px;
      border-radius: 10px;
      background-color: #feffff;
      opacity: 0.4;
      left: 5px;
      top: 6px;
    }
    .bowl-in {
      border-radius: 5px;
    }
    .liquid {
      height: 100%;
      width: 38%;
      bottom: 0;
      left: 0;
      background-color: #3ebcbc;
      z-index: 2;
      &::after {
        background-color: #3ebcbc;
      }
    }
  }

  .bottle-neck {
    width: 10px;
    height: 10px;
    top: -10px;
    left: 15px;
    background-color: #e6eff2;

    &::after {
      background-color: #a8dcea;
    }
  }

  .bottle-top {
    width: 14px;
    height: 7px;
    top: -16px;
    left: 13px;
    border-radius: 5px;
    background-color: #e6eff2;

    &::after {
      background-color: #a8dcea;
      border-radius: 0 5px 5px 0;
    }
  }
`;

const Skull = styled(Div)`
  width: 60px;
  height: 60px;
  bottom: 100%;
  right: 12%;
  .head {
    width: 100%;
    height: 100%;
    border-radius: 30px 30px 18px 18px;
    background-color: #feffff;
    overflow: hidden;

    &::before {
      width: 50%;
      height: 100%;
      right: 0;
      background-color: rgba(20, 1, 30, 0.15);
    }

    .skull-stain {
      width: 40px;
      height: 20px;
      left: -2px;
      top: -5px;
      border-radius: 10px;
      background-color: #3ebcbc;
      transform: skewX(-10deg);

      &::before {
        width: 10px;
        height: 20px;
        border-radius: 5px;
        background-color: #3ebcbc;
        top: 12px;
        left: 6px;
      }
    }
  }

  .eye {
    left: 15%;
    top: 37%;
    background-color: #14011e;
    width: 17px;
    height: 24px;
    border-radius: 20px;
    transform: rotate(20deg);

    &::after {
      background-color: #ee8228;
      width: 8px;
      height: 8px;
      border-radius: 10px;
      top: 8px;
      left: 4px;
      box-shadow: 0 0 2px #ee8228, 0 0 6px #ee8228;
      animation: ${eyes} 15s linear infinite;
    }

    &:nth-child(2) {
      left: auto;
      right: 15%;
      transform: rotate(-20deg);
    }
  }

  .nose {
    top: 76%;
    left: 40%;
    background-color: #14011e;
    width: 5px;
    height: 10px;
    border-radius: 10px;
    box-shadow: 7px 0 #14011e;
  }

  .teeth {
    background-color: #feffff;
    width: 60%;
    height: 10px;
    top: 92%;
    left: 20%;
    border-radius: 5px;

    &::before {
      width: 50%;
      height: 100%;
      right: 0;
      background-color: rgba(20, 1, 30, 0.15);
    }
  }

  .tooth {
    top: 50%;
    width: 8px;
    height: 10px;
    background-color: #feffff;
    border-radius: 2px;

    &::after {
      height: 100%;
      right: 0;
    }
    &:nth-child(2) {
      left: 14px;
    }
    &:nth-child(2):after {
      width: 50%;
      background-color: rgba(20, 1, 30, 0.15);
    }
    &:nth-child(3) {
      left: 28px;
    }
    &:nth-child(3):after {
      width: 100%;
      background-color: rgba(20, 1, 30, 0.15);
    }
  }
`;

const Candles = styled(Div)`
  width: 50%;
  height: 40px;
  bottom: 10px;
  left: 15%;
`;

const Candle = styled(Div)`
  width: 30px;
  height: 30px;
  background-color: #ee8228;

  &::after {
    width: 50%;
    height: 100%;
    right: 0;
    background-color: #d16d1b;
  }

  &::before {
    z-index: -1;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    bottom: 40px;
    left: -10px;
    background-color: #f5b987;
    opacity: 0.2;
  }

  .candle-reflection {
    width: 8px;
    height: 24px;
    background-color: #fdf0e5;
    opacity: 0.4;
    border-radius: 6px;
    left: 0;
    bottom: 5px;
  }

  .candle-wax {
    background-color: #f9d4b6;
    border-radius: 6px;
    width: 120%;
    left: -10%;
    height: 10px;
    top: -10px;
    z-index: 2;

    &::after {
      width: 8px;
      height: 20px;
      background-color: #f9d4b6;
      border-radius: 6px;
      left: 3px;
      top: 5px;
    }
    &::before {
      width: 8px;
      height: 12px;
      background-color: #f9d4b6;
      border-radius: 6px;
      right: 10px;
      top: 5px;
    }

    .wax-reflection-top {
      width: 20px;
      height: 8px;
      border-radius: 4px;
      background-color: #fdf0e5;
      opacity: 0.8;
      left: 0;
      top: 0;
      z-index: 4;
    }

    .wax-reflection {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: #fdf0e5;
      opacity: 0.8;
      left: 3px;
      top: 20px;
      z-index: 4;
    }
  }

  .flame {
    width: 24px;
    height: 24px;
    bottom: 150%;
    left: 3px;
    animation: ${flicker} 15s linear infinite;

    .flame-in {
      width: 100%;
      height: 100%;
      background-color: #ee8228;
      border-radius: 0 50% 50%;
      transform: rotate(45deg);
      animation: ${flame} 2s linear infinite;

      &::before {
        border-radius: 0 50% 50%;
        background-color: #f5b987;
        height: 70%;
        width: 70%;
        bottom: 0;
        left: 30%;
      }
    }
  }

  &:nth-child(2) {
    left: 50px;
    height: 40px;
    bottom: 10px;
  }

  &:nth-child(2):before {
    bottom: 50px;
  }

  &:nth-child(2) .flame {
    bottom: 140%;
    animation-delay: 0.15s;
  }
`;

const Book = styled(Div)`
  height: 24px;
  width: 60px;
  background-color: #faf1c5;
  bottom: 2px;
  border-radius: 8px 0 0 8px;

  &::before {
    height: 4px;
    width: 94%;
    bottom: 5px;
    left: 4px;
    background-color: #d5cda8;
  }

  &::after {
    width: 105%;
    height: 100%;
    border: 5px solid #c237bb;
    border-right: 0;
    border-radius: 8px 0 0 8px;
  }

  .details {
    width: 60%;
    height: 1px;
    background-color: rgba(219, 77, 39, 0.3);
    top: 8px;
    left: 4px;
    box-shadow: 20px 4px rgba(219, 77, 39, 0.3);
  }

  &:nth-child(2) {
    transform: scaleX(-1);
    bottom: 25px;
    left: 10px;
    z-index: 2;
  }

  &:nth-child(2):after {
    border-color: #ee8228;
  }

  &:nth-child(3) {
    bottom: 49px;
    left: 5px;
    z-index: 2;
  }

  &:nth-child(3):after {
    border-color: #3ebcbc;
  }
`;

const BookUp = styled(Div)`
  z-index: 5;
  width: 26px;
  height: 84px;
  left: 73px;
  border-radius: 2px;
  background-color: #500d78;
  bottom: 3px;
  transform: rotate(-15deg);
  
 &::after {
  width: 50%;
  height: 100%;
  right: 0;
  background-color: rgba(28, 5, 38, 0.5);
  }
  
   .details {
  width: 100%;
  height: 4px;
  background-color: #ee8228;
  bottom: 12px;
  box-shadow: 0 -10px #ee8228;
  
  
  &::after {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  bottom: 45px;
  box-shadow: 5px 5px #ee8228;
  transform: rotate(110deg);
  left: 11px;
}
`;

const Books = styled(Div)`
  bottom: 18px;
  left: 10px;
  height: 60px;
  width: 120px;
`;

const CandyBowl = styled.div`
  width: 75px;
  height: 75px;
  right: 17px;
  border-radius: 50%;
  background-color: #e6eff2;
  bottom: 22px;

  &::after {
    bottom: -1px;
    height: 6px;
    width: 46px;
    background: linear-gradient(
      to right,
      #e6eff2 50%,
      #a8dcea 50%,
      #a8dcea 100%
    );
    border-radius: 3px;
    left: calc(50% - 23px);
  }

  .candy-bowl-top {
    height: 5px;
    width: 40px;
    background: linear-gradient(
      to right,
      #e6eff2 50%,
      #a8dcea 50%,
      #a8dcea 100%
    );
    border-radius: 3px;
    left: calc(50% - 20px);
    top: 0;
    z-index: 20;
  }

  .candy-bowl-in {
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    border-radius: 60px;
    overflow: hidden;

    &::after {
      background-color: #3a0956;
      width: 50%;
      height: 100%;
      right: 0;
      border-radius: 0 50px 50px 0;
      z-index: 16;
      opacity: 0.1;
    }
  }

  .candy-bowl-reflection {
    opacity: 0.7;
    border-radius: 0 0 0 50px;
    border: 6px solid #feffff;
    border-top: 0;
    border-right: 0;
    width: 30px;
    height: 30px;
    bottom: 10px;
    left: 10px;
    z-index: 21;

    &::after {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #feffff;
      bottom: 20px;
      left: -6px;
      box-shadow: 27px 26px #feffff;
    }
  }

  .candy-purple {
    width: 20px;
    height: 20px;
    background-color: #ed42e4;
    border-radius: 50%;
    bottom: 2px;
    left: 12px;
    background: conic-gradient(
      #ed42e4 0,
      #ed42e4 12.5%,
      #500d78 0 25%,
      #ed42e4 25%,
      #ed42e4 37.5%,
      #500d78 37.5%,
      #500d78 50%,
      #ed42e4 50%,
      #ed42e4 62.5%,
      #500d78 62.5%,
      #500d78 75%,
      #ed42e4 75%,
      #ed42e4 87.5%,
      #500d78 87.5%,
      #500d78 100%
    );
    transform: rotate(-25deg);
    z-index: 1;

    &::after {
      opacity: 0.6;
      border-radius: 0 0 0 50px;
      border: 3px solid #feffff;
      border-top: 0;
      border-right: 0;
      width: 8px;
      height: 8px;
      bottom: 8px;
      left: 2px;
      z-index: 10;
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      top: 5px;
      left: 45px;
      z-index: 8;
    }

    &:nth-child(3) {
      top: 10px;
      left: 5px;
      z-index: 12;
    }

    &:nth-child(4) {
      top: 29px;
      left: 30px;
      z-index: 5;
    }
  }

  .candy-orange {
    width: 16px;
    background-color: #ee8228;
    left: 30px;
    bottom: 1px;
    height: 60%;
    right: 70%;
    top: 20%;
    border-radius: 20% 50% 50% 20%;
    transform: rotateY(-35deg);

    .candy-reflection {
      background-color: #feffff;
      width: 60%;
      height: 60%;
      border-radius: 50%;
      top: 5%;
      left: 15%;
      opacity: 0.3;
    }

    &:nth-child(5) {
      top: 35px;
      left: 50px;
      transform: rotate(-45deg);
      z-index: 11;
    }

    &:nth-child(6) {
      top: 40px;
      left: 2px;
      transform: rotate(-45deg);
    }

    &:nth-child(7) {
      top: 13px;
      left: 28px;
      transform: rotate(25deg);
    }
  }

  .candy-teal {
    width: 20px;
    height: 12px;
    border-radius: 3px;
    overflow: hidden;
    background-image: repeating-linear-gradient(
      -40deg,
      #feffff,
      #feffff 3px,
      #3ebcbc 3px,
      #3ebcbc 6px
    );
    left: 15px;
    top: 25px;
    z-index: 3;
    transform: rotate(-15deg);

    &::after {
      width: 100%;
      height: 4px;
      bottom: 0;
      background-color: #329399;
      opacity: 0.5;
    }

    &:nth-child(9) {
      top: 22px;
      left: 48px;
      transform: rotate(-15deg);
    }

    &:nth-child(10) {
      top: 30px;
      left: -3px;
      transform: rotate(-85deg);
    }

    &:nth-child(11) {
      top: 45px;
      left: 35px;
      transform: rotate(25deg);
    }
  }

  .candy-dark-purple {
    width: 30px;
    height: 10px;
    border-radius: 3px;
    left: 20px;
    top: 5px;
    background-color: #3a0956;
    transform: rotate(5deg);
    z-index: 1;

    &::after {
      background-color: #3a0956;
      width: 50%;
      height: 60%;
      left: 70%;
      top: 20%;
      border-radius: 50% 20% 20% 50%;
      transform: rotateY(35deg);
    }

    &::before {
      background-color: #3a0956;
      width: 50%;
      height: 60%;
      right: 70%;
      top: 20%;
      border-radius: 20% 50% 50% 20%;
      transform: rotateY(-35deg);
    }

    .candy-reflection {
      background-color: #8f65a9;
      width: 80%;
      height: 4px;
      border-radius: 2px;
      bottom: 2px;
      left: 2px;
      z-index: 20;
      opacity: 0.7;
    }

    &:nth-child(14) {
      top: 50px;
      left: 40px;
      transform: rotate(-45deg);
      z-index: 2;
    }

    &:nth-child(15) {
      top: 30px;
      left: -3px;
      transform: rotate(-85deg);
      z-index: 13;
    }

    &:nth-child(16) {
      top: 43px;
      left: 22px;
      transform: rotate(25deg);
      z-index: 2;
    }
  }
`;

const ShelfShadow = styled(ShelfBracket)`
  background-color: #501e70;
  z-index: 1;

  *,
  *::after,
  *::before,
  * > * {
    background-color: #501e70 !important;
    background: #501e70;
    box-shadow: none;
  }

  .base {
    background: linear-gradient(to right, #501e70 0%, #410b61 100%);
    transform: scale(1.03, 1.1) translate(6px, -2px);
  }

  ${Bottle},
  ${BottleLeft},
  ${BottleRight},
  ${Candle},
  ${Drippings},
  ${Books},
  ${CrystalBall}, .shelf-hooks, .shelf-hooks:after {
    transform: scale(1.05, 1.1) translateX(10px);
  }

  ${BottleRight} {
    transform: scale(1.05, 1.15) translate(10px, -10px) rotate(-90deg);
  }

  ${Candles},
  ${Candle}:after,
  ${Skull},
  ${Bottle},
  ${BottleLeft},
  ${BottleRight},
  ${Books},
  ${CrystalBall},
  .flame,
  .ball:after {
    background-color: transparent !important;
  }

  ${Bottle} *,
  ${Bottle} *:after,
  ${BottleLeft} *,
  ${BottleLeft} *:after,
  ${BottleRight} *,
  ${BottleRight} *:after,
  ${Skull} *,
  ${Skull} *:before,
  ${CandyBowl} *,
  ${CrystalBall} *,
  .stand:after,
  .flame-in,
  .flame-in:before {
    background-color: #410b61 !important;
    background: #410b61;
  }

  ${CandyBowl} {
    background-color: #410b61;
  }

  &::before {
    content: none;
  }

  ${CandyBowl},
  ${Skull} {
    transform: scale(1.1, 1.2) translateX(10px);
  }

  .shelf-hooks,
  .shelf-hooks:after {
    transform: scale(1.05, 1.1) translate(6px, -2px);
  }

  ${Book}:after {
    content: none;
  }
`;

const Shelf = (props) => (
  <div {...props}>
    <ShelfTop>
      <ShelfShadow>
        <div className="shelf-hooks" />
        <div className="base" />
        <CrystalBall>
          <div className="stand" />
          <div className="ball" />
        </CrystalBall>
        <BottleLeft>
          <div className="bowl" />
          <div className="bottle-neck" />
          <div className="bottle-top" />
        </BottleLeft>
        <Drippings>
          <div className="drip" />
        </Drippings>
        <BottleRight>
          <div className="bowl" />
          <div className="bottle-neck" />
          <div className="bottle-top" />
        </BottleRight>
      </ShelfShadow>
      <ShelfBracket>
        <div className="shelf-hooks" />
        <div className="base" />
        <CrystalBall>
          <div className="stand" />
          <div className="ball">
            <div className="ball-highlight" />
          </div>
        </CrystalBall>
        <BottleLeft>
          <div className="bowl">
            <div className="bowl-in">
              <div className="liquid">
                <div className="bottle-bubble" />
                <div className="bottle-bubble" />
                <div className="bottle-bubble" />
                <div className="bottle-bubble" />
                <div className="bottle-bubble" />
              </div>
              <div className="bottle-reflection" />
            </div>
          </div>
          <div className="bottle-neck" />
          <div className="bottle-top" />
        </BottleLeft>
        <Drippings>
          <div className="drip" />
        </Drippings>
        <BottleRight>
          <div className="bowl">
            <div className="bowl-in">
              <div className="liquid" />
            </div>
          </div>
          <div className="bottle-neck" />
          <div className="bottle-top" />
        </BottleRight>
      </ShelfBracket>
    </ShelfTop>
    <ShelfMiddle>
      <ShelfShadow>
        <div className="shelf-hooks" />
        <div className="base" />
        <Skull>
          <div className="head" />
          <div className="teeth" />
        </Skull>
        <Candles>
          <Candle>
            <div className="candle-wax" />
            <div className="flame">
              <div className="flame-in" />
            </div>
          </Candle>
          <Candle>
            <div className="candle-wax" />
            <div className="flame">
              <div className="flame-in" />
            </div>
          </Candle>
        </Candles>
      </ShelfShadow>
      <ShelfBracket>
        <div className="shelf-hooks" />
        <div className="base" />
        <Skull>
          <div className="head">
            <div className="skull-stain" />
            <div className="eye" />
            <div className="eye" />
            <div className="nose" />
          </div>
          <div className="teeth">
            <div className="tooth" />
            <div className="tooth" />
            <div className="tooth" />
          </div>
        </Skull>
        <Candles>
          <Candle>
            <div className="candle-wax">
              <div className="wax-reflection" />
              <div className="wax-reflection-top" />
            </div>
            <div className="candle-reflection" />
            <div className="flame">
              <div className="flame-in" />
            </div>
          </Candle>
          <Candle>
            <div className="candle-wax">
              <div className="wax-reflection" />
              <div className="wax-reflection-top" />
            </div>
            <div className="candle-reflection" />
            <div className="flame">
              <div className="flame-in" />
            </div>
          </Candle>
        </Candles>
      </ShelfBracket>
    </ShelfMiddle>
    <ShelfBottom>
      <ShelfShadow>
        <div className="shelf-hooks" />
        <div className="base" />
        <Books>
          <Book />
          <Book />
          <Book />
          <BookUp />
        </Books>
        <CandyBowl>
          <div className="candy-bowl-top" />
        </CandyBowl>
      </ShelfShadow>
      <ShelfBracket>
        <div className="shelf-hooks" />
        <div className="base" />
        <Books>
          <Book>
            <div className="details" />
          </Book>
          <Book>
            <div className="details" />
          </Book>
          <Book>
            <div className="details" />
          </Book>
          <BookUp>
            <div className="details" />
          </BookUp>
        </Books>
        <CandyBowl>
          <div className="candy-bowl-top" />
          <div className="candy-bowl-in">
            <div className="candy-purple" />
            <div className="candy-purple" />
            <div className="candy-purple" />
            <div className="candy-purple" />
            <div className="candy-orange">
              <div className="candy-reflection" />
            </div>
            <div className="candy-orange">
              <div className="candy-reflection" />
            </div>
            <div className="candy-orange">
              <div className="candy-reflection" />
            </div>
            <div className="candy-orange">
              <div className="candy-reflection" />
            </div>
            <div className="candy-teal" />
            <div className="candy-teal" />
            <div className="candy-teal" />
            <div className="candy-teal" />
            <div className="candy-dark-purple">
              <div className="candy-reflection" />
            </div>
            <div className="candy-dark-purple">
              <div className="candy-reflection" />
            </div>
            <div className="candy-dark-purple">
              <div className="candy-reflection" />
            </div>
            <div className="candy-dark-purple">
              <div className="candy-reflection" />
            </div>
          </div>
          <div className="candy-bowl-reflection" />
        </CandyBowl>
      </ShelfBracket>
    </ShelfBottom>
  </div>
);

export default Shelf;
