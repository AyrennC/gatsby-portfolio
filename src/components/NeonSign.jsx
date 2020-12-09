import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const blink = keyframes`
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79%{
    color: #333;
  }
  80% {

    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
`;

const NeonSign = styled.div`
  text-align: left;
  height: 250px;
  user-select: none;

  b {
    font: 400 16vh 'VT323';
    color: #fee;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444,
      0 0 0.1em #ff4444, 0 10px 3px #000;
  }
  b span {
    animation: ${blink} linear infinite 2s;
  }
  b span:nth-of-type(2) {
    animation: ${blink} linear infinite 3s;
  }
`;

export default NeonSign;
